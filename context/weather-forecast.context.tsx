import * as Location from 'expo-location';

import weatherServer from '../api/weather-api-server';
import createDataContext from './create-data.context';

const weatherReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_WEATHER_FORECAST':
      return action.payload;
    case 'GET_WEATHER_FORECAST_ERROR':
      return action.payload;
    default:
      return state;
  }
};

const getWeatherForecast = (dispatch: any) => {
  return async () => {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      dispatch({
        type: 'GET_WEATHER_FORECAST_ERROR',
        payload: 'Permission to access location was denied',
      });
    }

    const location = await Location.getCurrentPositionAsync({});

    if (location) {
      try {
        const response = await weatherServer.get(
          `onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=hourly,daily&appid=359f493fae15298fe7c01cdb777bda44`
        );

        if (response.status === 200) {
          let weatherData = response.data;

          let newWeatherForecast = {
            date: new Date(weatherData.current.dt * 1000).toLocaleDateString(
              'en-US'
            ),
            temperature: weatherData.current.temp,
            description: weatherData.current.weather[0].description,
            main: weatherData.current.weather[0].main,
            pressure: weatherData.current.pressure,
            humidity: weatherData.current.humidity,
          };

          dispatch({
            type: 'GET_WEATHER_FORECAST',
            payload: newWeatherForecast,
          });
        }
      } catch (err) {
        dispatch({
          type: 'GET_WEATHER_FORECAST_ERROR',
          payload: 'Something went wrong',
        });
      }
    }

    // dispatch({ type: 'GET_WEATHER_FORECAST', payload: location });
  };
};

export const { Context, Provider } = createDataContext(
  weatherReducer,
  { getWeatherForecast },
  {}
);
