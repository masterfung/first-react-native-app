import React from "React";
import { Text, StyleSheet } from "react-native";

const headingText = (props) => (
  <Text
  {...props}
  style={[styles.textLogin, props.style]} //allows overriding
  >{props.children}</Text>

);

const styles = StyleSheet.create({
  textLogin: {
    fontSize: 28,
    fontWeight: "bold"
  },
});

export default headingText;
