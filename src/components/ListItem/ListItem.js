import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listNodes = (props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: "#eee",
  }
})

export default listNodes;
