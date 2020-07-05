import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import UserDetails from '../../components/home/user-details/user-details.component';
import PositionButton from '../../components/home/position-button/position-button.component';
import LocationDetails from '../../components/home/location-details/location-details.component';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [showLocation, setShowLocation] = useState(false);
  const decoded = navigation.state.params.decoded;

  useEffect(() => {
    if (typeof decoded === 'undefined') {
      navigation.navigate('Login');
    }
  }, [decoded]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.homeImage}
        source={require('../../assets/atmospheric.png')}
      />
      <UserDetails decoded={decoded} />
      <PositionButton
        setShowLocation={setShowLocation}
        showLocation={showLocation}
      />
      {showLocation ? <LocationDetails navigation={navigation} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default HomeScreen;
