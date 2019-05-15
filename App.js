import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './screens/main';
import { addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';

class App extends React.Component{
   render(){
    return (
    <AppNavigator />
    );
  }
 }
 const mapStateToProps = (state) => ({
   nav: state.first
 })


export default connect(mapStateToProps)(App);
