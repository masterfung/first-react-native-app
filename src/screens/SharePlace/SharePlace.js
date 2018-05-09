import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickMap from '../../components/PickMap/PickMap';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onMenuNavigator);
    this.state = {
      placeName: null
    }
  }

  onMenuNavigator = (event) => {
    if (event.type === "NavBarButtonPress"){
      if (event.id === "sharePlaceTab") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  placeAddedHandler = (placeName) => {
    if(this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText><HeadingText>Share a Place</HeadingText></MainText>
          <PickImage />
          <PickMap />
          <PickLocation />
          <PlaceInput placeName={this.state.placeName} changePlaceName={this.placeNameChangedHandler} />
          <View style={styles.button}>
            <Button title="Share" onPress={this.placeAddedHandler}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
