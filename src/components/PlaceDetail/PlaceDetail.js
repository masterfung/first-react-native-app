import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  let modalContent = null;

  return (
    <View style={styles.modalContainer}>
      <View style={styles.informationContainer}>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.titleText}> {props.selectedPlace.name} </Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
        <Button title="Close" onPress={props.onModalClose}></Button>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 35,
    flex: 1,
  },
  informationContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  placeImage: {
    width: 200,
    height: 300
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  deleteButton: {
    alignItems: "center"
  },
  closeButton: {

  }
});

export default placeDetail;
