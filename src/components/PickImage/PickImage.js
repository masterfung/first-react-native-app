import React, { Component } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={{uri: 'https://picsum.photos/250/250/?random'}} style={styles.imageSizing} />>
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => alert('Pick Image')} />
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
    height: 250,
    width: 250,
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

export default PickImage;
