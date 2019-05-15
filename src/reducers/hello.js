import React from 'react';
const initialState ={
  count: 0,
  users:[],
  loading: false,
  error: null,
  success: null,
  respo: []
};

const FirstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
    {
      return{
        ...state,
        users: action.payload
      }
    }
  case 'LOGIN': {
    return {
      ...state,
      respo: action.payload
    }
  }
  case 'LOGIN_START': {
    return{
      ...state,
        loading: true
    }
  }
  case 'LOGIN_SUCCESS': {
    return{
      ...state,
        loading: false,
        respo: action.payload
    }
  }
  case 'LOGIN_FAIL': {
    return{
      ...state,
        loading: false,
        error: action.payload

    }
  }
    default:
      return state;
  }

}
export default FirstReducer;
