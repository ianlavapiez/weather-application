import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const UserDetails: FunctionComponent = ({ decoded }: any): JSX.Element => {
  const { name, nickname } = decoded;

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text
        style={styles.linkText}
        onPress={() => Linking.openURL(`https://github.com/${nickname}`)}
      >
        https://github.com/{nickname}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
  },
  linkText: {
    fontSize: 20,
    color: 'blue',
    marginVertical: 25,
  },
});

export default UserDetails;
