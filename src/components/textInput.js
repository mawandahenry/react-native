import React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Textinput extends React.Component {
  constructor(props){
    super(props);
}
  static defaultProps = {
    placeholder: "undefined please insert value"

  }
  static propTypes = {
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    entry:PropTypes.bool,
    paswd: PropTypes.bool
  }


  render(){
    const {placeholder, value, handleChange, handleFinal, entry, paswd} = this.props;
    return(
      <View style = {styles.container}>
  <TextInput
    style = {styles.text}
    placeholder = {placeholder}
    underlineColorAndroid = "transparent"
    autoCorrect = {false}
    value = {value}
    onChangeText = {handleChange}
    onSubmitEditing = {handleFinal}
    secureTextEntry = {entry}
    password ={paswd}
  />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60,
},
text: {
  flex:1
}
})
export default Textinput;
