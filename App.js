import React from 'react';
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      list: [],
      input: ""
    };
  }

  handleInputChange = (value) =>  {
    this.setState({ input: value });
  }

  clearList(){
    this.setState({
      list : []
    })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
    console.log(this.state);
    
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ""
      });
    }
  };
  
  render(){
    let list = this.state.list.map( (element, index) => {
    return <View key = {index} >
      <Text>{element}</Text>
      <br/>
    </View>

    });
    return (
      <View style={styles.container}>
      <Text>My to do list</Text>
    <TextInput
    value={this.state.input}
    placeholder="Enter new task"
    onChange={e => this.handleInputChange(e.target.value)}
    onKeyPress = {(e) => this.handleKeyPress(e)}
    />
    <br/>
    <Button title = 'Add' onPress = {() => this.handleAddTask()}></Button>
    {list}
    <br/>
  <Button title = 'clear List' onPress = {() => this.clearList()}></Button>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddbea8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
