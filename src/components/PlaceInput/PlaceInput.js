import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName : ''
    };
  }

  changePlaceName = (val) => {
    this.setState({
      placeName : val
    })
  }

  placeSubmitHandler = (prevState) => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);

  }

  render() {
    return (
      <View style= {styles.inputContainer}>
      <TextInput placeholder="Add Something Awesome"
        value={this.state.placeName}
        onChangeText={this.changePlaceName}
        style={styles.inputBox} />
      <Button
        title="Add"
        style={styles.textButton}
        onPress={this.placeSubmitHandler} />
    </View>
  );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  inputBox : {
    width: '70%'
  },
  textButton: {
    width: '30%'
  }
});

export default PlaceInput;
