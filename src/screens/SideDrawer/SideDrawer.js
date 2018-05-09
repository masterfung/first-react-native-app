import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class SideDrawer extends Component {
  render () {
    return (
      <View style={
        [styles.container,
        {width: Dimensions.get("window").width * 0.8 }]}>
        <MainText>
            <HeadingText>Shareable</HeadingText>
          </MainText>
        <TouchableOpacity>
          <View style={styles.drawerContainer}>
            <Icon name="ios-log-out" size={30} color="red" />
            <Text style={styles.signOutText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: "white",
    flex: 1
  },
  signOutText: {
    fontSize: 18,
    padding: 10
  },
  drawerContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#eee"
  }
});

export default SideDrawer;
