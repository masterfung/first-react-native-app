import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

const placeInput = (props) => (
  <DefaultInput placeholder="Place Name"
      value={props.placeName}
      onChangeText={props.changePlaceName} />
);

export default placeInput;
