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
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: 'https://picsum.photos/200/300/?random'
          }
        })
      };
    });
  }

  removeSelectedObject = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key; // if returns false, then item is removed
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <PlaceInput onPlaceAdded={this.placeNameChangedHandler} />

        <PlaceList places={this.state.places} onItemDeleted={this.removeSelectedObject}/>
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
