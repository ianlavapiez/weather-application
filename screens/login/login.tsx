import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';

const auth0ClientId = 'jLQ61vYIINMM5ZHDQfHTFtZ07T9QMu6A';
const authorizationEndpoint = 'https://dev-vdbkszra.us.auth0.com/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const LoginScreen = ({ navigation }: any) => {
  const [name, setName] = useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
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
          });
        }
      }
    }
  }, [result]);

  return (
    <View>
      <TouchableOpacity onPress={() => promptAsync({ useProxy })}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
