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
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onMenuNavigator);
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

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText><HeadingText>Share a Place</HeadingText></MainText>
          <View style={styles.placeholder}>
            <Image source={{uri: 'https://picsum.photos/200/300/?random'}} style={styles.imageSizing} />>
          </View>
          <View style={styles.button}>
            <Button title="Pick Image" />
          </View>

          <View style={styles.placeholder}>
            <Text>Location</Text>
          </View>
          <View style={styles.button}>
            <Button title="Locate Me" />
          </View>

          <DefaultInput placeholder="Place Name" />
          <View style={styles.button}>
            <Button title="Share" />
          </View>
          <PlaceInput onPlaceAdded={this.placeAddedHandler} />
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
  placeholder: {
    height: 150,
    width: "80%",
    borderWidth: 1,
    backgroundColor: "#eee"
  },
  button: {
    margin: 5
  },
  imageSizing: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
