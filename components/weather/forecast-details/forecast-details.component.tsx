import React, {
  useState,
  useContext,
  useEffect,
  FunctionComponent,
  Props,
} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationState } from 'react-navigation';

import { Context } from '../../../context/weather-forecast.context';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const ForecastDetails: FunctionComponent<NavigationState> = ({
  navigation,
}: any): JSX.Element => {
  const { state, getWeatherForecast } = useContext(Context);
  const [dimensions, setDimensions] = useState({ screen, window });

  const onChange = ({ screen, window }: any): void => {
    setDimensions({ screen, window });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  useEffect(() => {
    getWeatherForecast();

    const listener = navigation.addListener('didFocus', () => {
      getWeatherForecast();
    });

    return () => {
      listener.remove();
    };
  }, []);

  const ForeCastView: FunctionComponent = (): JSX.Element => {
    if (dimensions.screen.width > 780 || dimensions.window.width > 780) {
      return (
        <View style={styles.container}>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.date}</Text>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.temperature}</Text>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.description}</Text>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.main}</Text>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.pressure}</Text>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.humidity}</Text>
          <Text style={styles.separatorText}>|</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.date}</Text>
          <Text style={styles.separatorText}>|</Text>
          <Text style={styles.detailText}>{state.temperature}</Text>
          <Text style={styles.separatorText}>|</Text>
        </View>
      );
    }
  };

  return <ForeCastView />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  detailText: {
    fontSize: 20,
    color: '#333',
  },
});

export default ForecastDetails;
