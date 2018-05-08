import React from "React";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const buttonWithBackground = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text
      {...props}
      style={[styles.mainText, props.style]} //allows overriding
      >{props.children}</Text>
    </View>
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black"
  },
});

export default buttonWithBackground;
