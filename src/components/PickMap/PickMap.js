import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

class PickMap extends Component {
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
  placeholder: {
    height: 150,
    width: "80%",
    borderWidth: 1,
    backgroundColor: "#eee"
  },
  button: {
    margin: 5
  },
});

export default PickMap;
