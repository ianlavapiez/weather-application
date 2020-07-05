import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-vdbkszra.us.auth0.com',
  clientId: 'jLQ61vYIINMM5ZHDQfHTFtZ07T9QMu6A',
});

const LoginScreen = ({ navigation }: any) => {
  const [accessToken, setAccessToken] = useState('');

  const login = () => {
    auth0.webAuth
      .authorize({ scope: 'openid profile' })
      .then((credentials) => {
        console.log(credentials.accessToken);
        setAccessToken(credentials.accessToken);
        navigation.navigate('Home');
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <TouchableOpacity onPress={() => login()}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
