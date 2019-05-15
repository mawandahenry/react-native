import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import RootReducer from '../reducers/';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
  const initStore = () => createStore(RootReducer, {}, composedEnhancer);


module.exports = {
  initStore
};
