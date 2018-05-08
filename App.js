import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "myfirstapp.AuthScreen",
  () => AuthScreen,
  store,
  Provider);

Navigation.registerComponent(
  "myfirstapp.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider);

Navigation.registerComponent(
  "myfirstapp.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "myfirstapp.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "myfirstapp.SideDrawerScreen",
  () => SideDrawerScreen,
  store,
  Provider
)

// Start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: "myfirstapp.AuthScreen",
    title: "Login"
  }
});
