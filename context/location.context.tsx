import * as Location from 'expo-location';

import createDataContext from './create-data.context';

const locationReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return action.payload;
    case 'GET_LOCATION_ERROR':
      return action.payload;
    default:
      return state;
  }
};

const getLocation = (dispatch: any) => {
  return async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        dispatch({
          type: 'GET_LOCATION_ERROR',
          payload: 'Permission to access location was denied.',
        });
      }

      const location = await Location.getCurrentPositionAsync({});

      dispatch({ type: 'GET_LOCATION', payload: location });
    } catch (err) {
      dispatch({
        type: 'GET_LOCATION_ERROR',
        payload: 'Something went wrong.',
      });
    }
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { getLocation },
  {}
);
