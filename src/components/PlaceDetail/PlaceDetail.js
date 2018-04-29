import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View style={styles.informationContainer}>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.titleText}> {props.selectedPlace.name} </Text>
      </View>
    )
  }

  return (
    <Modal onRequestClose={props.onModalClose} visible={props.selectedPlace !== null} animationType="slide">
    <View style={styles.modalContainer}>
      {modalContent}
      <View>
        <Button
          title="Delete Content"
          onPress={props.onItemDeleted}
          color="red"></Button>
        <Button title="Close" onPress={props.onModalClose}></Button>
      </View>
    </View>
  </Modal>
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

  },
  closeButton: {

  }
});

export default placeDetail;
