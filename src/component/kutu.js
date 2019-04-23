import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import {styleKutu} from '../style';

class Kutu extends Component {
  constructor(props) {
    super(props);
    this.state={
        secili:this.props.secili,
    };

  }


  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} setNativeProps={this.setNativeProps} style={[styleKutu.kutu,this.state.secili?styleKutu.secili:{}]} >
        <Text> textInComponent </Text>
      </TouchableOpacity>
    );
  }
}

export default Kutu;
