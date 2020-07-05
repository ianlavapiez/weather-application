import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native';

const PositionButton: FunctionComponent = ({
  setShowLocation,
  showLocation,
}: any): JSX.Element => {
  const toggleLocation = () => setShowLocation(!showLocation);

  return (
    <TouchableOpacity style={styles.button} onPress={() => toggleLocation()}>
      <Text style={styles.buttonText}>
        {!showLocation ? 'Get Position' : 'Hide Position'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PositionButton;
