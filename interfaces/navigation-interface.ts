import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

export interface INavigationProps {
  navigation: Navigation;
}
