import React, {
  useContext,
  useState,
  FunctionComponent,
  useEffect,
} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../../../context/location.context';

const LocationDetails: FunctionComponent = ({
  navigation,
}: any): JSX.Element => {
  const { state, getLocation } = useContext(Context);

  useEffect(() => {
    getLocation();

    const listener = navigation.addListener('didFocus', () => {
      getLocation();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Latitude</Text>
        <Text style={styles.subHeaderText}>
          {state.coords ? state.coords.latitude : 'No data'}
        </Text>
        <Text style={styles.headerText}>Longitude</Text>
        <Text style={styles.subHeaderText}>
          {state.coords ? state.coords.longitude : 'No data'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LocationDetails;
