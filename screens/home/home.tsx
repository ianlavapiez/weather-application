import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import UserDetails from '../../components/home/user-details/user-details.component';
import PositionButton from '../../components/home/position-button/position-button.component';
import LocationDetails from '../../components/home/location-details/location-details.component';

const HomeScreen = ({}) => {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <View style={styles.container}>
      <UserDetails />
      <PositionButton
        setShowLocation={setShowLocation}
        showLocation={showLocation}
      />
      {showLocation ? <LocationDetails /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
