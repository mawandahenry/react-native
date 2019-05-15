import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import Textinput from '../src/components/textInput';
class Profile extends React.Component {
  constructor(props){
    super();
    this.state = {
      val: ''
    }
  }
  static navigationOptions = {
    title: 'Profiles',
    headerStyle: {
      backgroundColor: 'pink'
    }
  }
  handie = (val) => {
    this.setState({
      val
    })
  }
  fin =() =>{
    console.warn(this.state.val)
  }
  render() {
    const rows = [];
    const ops = [];
    for(var i = 0; i < 4; i++){
      for (var j = 0; j < 3; j++) {
        rows.push(<TouchableOpacity><Text>{i+1}</Text></TouchableOpacity>);
      }
    }
    return (
      <View style = {styles.container}>

        <View style = {styles.screens}>
        <Textinput
          value = {this.state.val}
          handleChange = {this.handie}
          handleFinal = {this.fin}
          style = {styles.finx}
          />
        </View>

        <View style = {styles.results}>
        <Text>Screen 1</Text>
        </View>

        <View style = {styles.screen2}>

        <View style = {styles.keys}>
        <View>
        {rows}
        </View>
        </View>

        <View style = {styles.ops}>
        <TouchableOpacity>

        </TouchableOpacity>
        </View>

        </View>

  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen2: {
    flex: 5,
    backgroundColor: 'pink',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  results: {
    backgroundColor: 'red',
    alignSelf: 'stretch',
    flex: 1
  },
  screens: {
    flex:2,
    alignSelf: 'stretch',
    backgroundColor: 'pink'
  },
  keys: {
    flex: 2,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    flexGrow: 3
  },
  ops:{
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'stretch'

  },
  finx: {
    position: 'absolute',
    bottom: 15
  }
})
export default Profile;
