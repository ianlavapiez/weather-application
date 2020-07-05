import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const sample = () => navigation.navigate('Home');

  return (
    <View>
      <TouchableOpacity onPress={() => sample()}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
