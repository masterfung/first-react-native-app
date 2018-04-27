import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places : []
    };
  }

  placeNameChangedHandler = (placeName) => {

    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  }

  render() {

    return (
      <View style={styles.mainContainer}>
        <PlaceInput onPlaceAdded={this.placeNameChangedHandler} />

        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});
