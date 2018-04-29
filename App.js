import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places : [],
      selectedPlace: null
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

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key;
        })
      }
    });

  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key; // if returns false, then item is removed
        }),
        selectedPlace: null
      }
    });
  }

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <PlaceDetail selectedPlace={this.state.selectedPlace}
        onModalClose={this.modalCloseHandler} onItemDeleted={this.placeDeletedHandler} />
        <PlaceInput onPlaceAdded={this.placeNameChangedHandler} />
        <PlaceList
        places={this.state.places}
        onItemSelected={this.placeSelectedHandler}/>
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
