import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingInput from '../../components/UI/HeadingText/HeadingText';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (
      <View style={styles.authContainer}>
        <HeadingInput>Please Log In</HeadingInput>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="E-Mail Address" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
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
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
