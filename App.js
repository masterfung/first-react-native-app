import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName : '',
      places : []
    };
  }

  changeplaceName = (val) => {
    this.setState({
      placeName : val
    })
  }

  placeSubmitHandler = (prevState) => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }

  render() {
    const placeOutput = this.state.places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ));

    return (
      <View style={styles.mainContainer}>
        <View style= {styles.inputContainer}>
        <TextInput placeholder="Add Something Awesome"
        value={this.state.placeName}
        onChangeText={this.changeplaceName}
        style={styles.inputBox} />
        <Button
        title="Add"
        style={styles.textButton}
        onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.resultList}>{placeOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  inputBox : {
    width: '70%'
  },
  textButton: {
    width: '30%'
  },
  resultList: {
    width: "100%"
  }
});
