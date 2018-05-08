import React from "React";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = (props) => (
  <TextInput
  {...props}
  style={[styles.input, props.style]} //insure cascade styles
  underlineColorAndroid="transparent" />

);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    margin: 8,
    padding: 4
  }
});

export default defaultInput;
