import { Navigation, Tab } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
        screen: "myfirstapp.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place",
        icon: sources[0] //order from the Promise
      },
      {
        screen: "myfirstapp.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place",
        icon: sources[1]
      }
    ]
    });
  });



}

export default startTabs;
