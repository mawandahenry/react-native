import React from 'react';
import {View, Text, Button, StyleSheet, Modal} from 'react-native';
import PropTypes from 'prop-types';
export default class ModalClass extends React.Component{
  constructor(props){
    super(props);

  }
  static propTypes = {
    transparency: PropTypes.string,
    visibility: PropTypes.bool.isRequired,
    requestClose: PropTypes.func.isRequired

  }
  defaultProps = {
    visibility: false
  }
  render(){
    const {visibility, requestClose, data} = this.props;
  return(
    <Modal animationType = "slide" transparent = {false} visible = {visibility} onRequestClose = {requestClose}>
    
    <View style = {styles.but}>
     <Button color = "red" title = "terminate me" onPress = {requestClose} />
    </View>
  </Modal>
  )
}
}
const styles = StyleSheet.create({
  but: {
    margin: 15
  }
})
