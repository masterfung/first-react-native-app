import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.textLogin}>Please Log In</Text>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <TextInput placeholder="E-Mail Address" style={styles.input} underlineColorAndroid="transparent" />
          <TextInput placeholder="Password" style={styles.input} underlineColorAndroid="transparent"/>
          <TextInput placeholder="Confirm Password" style={styles.input} underlineColorAndroid="transparent" />
        </View>


        <Button title="Submit" onPress={this.loginHandler} title="Login" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textLogin: {
    fontSize: 22,
    fontWeight: "bold"
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    margin: 8,
    padding: 4
  }
});

export default AuthScreen;
