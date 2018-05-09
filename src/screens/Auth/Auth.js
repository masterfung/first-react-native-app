import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingInput from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (

      <ImageBackground source={{uri: 'https://picsum.photos/800/800/?random'}} style={styles.imageSizing}>
        <View style={styles.authContainer}>
        <MainText>
          <HeadingInput>Please Log In</HeadingInput>
        </MainText>
          <ButtonWithBackground color="#29aaf4">Please Log In</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="E-Mail Address" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>

          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler} title="Login">Log In</ButtonWithBackground>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageSizing: {
    width: "100%",
    flex: 1
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
