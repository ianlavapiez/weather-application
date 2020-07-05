import createDataContext from './create-data.context';
import * as Location from 'expo-location';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return action.payload;

    default:
      return state;
  }
};

const getLocation = (dispatch) => {
  return async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      dispatch({
        type: 'GET_LOCATION',
        payload: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    dispatch({ type: 'GET_LOCATION', payload: location });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { getLocation },
  {}
);
