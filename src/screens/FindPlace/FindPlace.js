import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onMenuNavigator);
  }

  onMenuNavigator = (event) => {
    if (event.type === "NavBarButtonPress"){
      if (event.id === "findPlaceTab") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }

  itemSelectedHandler = (key) => {
    const selectedPlaceInfo = this.props.places.find((place) => {
      return place.key === key;
    });

    this.props.navigator.push({
      screen: "myfirstapp.PlaceDetailScreen",
      title: selectedPlaceInfo.name,
      passProps: {
        selectedPlace: selectedPlaceInfo
      }
    })
  }

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
      </View>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    places: state.places.places
  }
}

export default connect(mapDispatchToProps)(FindPlaceScreen);
