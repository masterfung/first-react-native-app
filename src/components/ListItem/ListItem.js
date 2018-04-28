import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listNodes = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.imageViewContainer}>
      <Image resizeMode='contain' source={props.placeImage} style={styles.placeImage} />
    </View>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    width: 200,
    height: 300,
  },
  imageViewContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexDirection: 'column',
  }
})

export default listNodes;
