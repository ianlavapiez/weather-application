import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';

const auth0ClientId = 'jLQ61vYIINMM5ZHDQfHTFtZ07T9QMu6A';
const authorizationEndpoint = 'https://dev-vdbkszra.us.auth0.com/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const LoginScreen = ({ navigation }: any) => {
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri: redirectUri,
      clientId: auth0ClientId,
      responseType: 'id_token',
      scopes: ['openid', 'profile'],
      extraParams: {
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint }
  );

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          'Authentication error.',
          result.params.error_description || 'Something went wrong.'
        );
        return;
      }
      if (result.type === 'success') {
        const jwtToken = result.params.id_token;
        const decoded: object = jwtDecode(jwtToken);

        if (decoded) {
          navigation.navigate('Home', {
            decoded,
            jwtToken,
          });
        }
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.homeImage}
        source={require('../../assets/atmospheric.png')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => promptAsync({ useProxy })}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  homeImage: {
    width: 200,
    height: 200,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
