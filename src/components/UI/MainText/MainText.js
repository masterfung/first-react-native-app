import React from "React";
import { Text, StyleSheet } from "react-native";

const mainText = (props) => (
  <Text
  {...props}
  style={[styles.mainText, props.style]} //allows overriding
  >{props.children}</Text>

);

const styles = StyleSheet.create({
  mainText: {
    color: "red",
    backgroundColor: "transparent"
  },
});

export default mainText;
