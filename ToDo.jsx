import React, {Component} from 'react';
import {View, Text} from 'react-native'

export default class ToDo extends Component {
  render() {
    return <View>
      <Text>
    {this.props.task}
      </Text>
    </View>;
  }
}