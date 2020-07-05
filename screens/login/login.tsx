import React from 'react';
import * as AuthSession from 'expo-auth-session';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const sample = () => navigation.navigate('Home');

  console.log(AuthSession.getRedirectUrl());

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
