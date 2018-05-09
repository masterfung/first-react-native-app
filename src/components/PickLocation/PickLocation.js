import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Location</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert('Locating')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  button: {
    margin: 5
  },
});

export default PickLocation;
