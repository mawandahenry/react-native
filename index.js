/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initStore} from './src/store';
import {Provider} from 'react-redux';
const store = initStore();

const Clor = () => (
  <Provider store = {store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Clor);
