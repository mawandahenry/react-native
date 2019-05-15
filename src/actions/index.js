import axios from 'axios';
export const sender =(work) => async dispatch=> {
 await fetch('http://10.42.0.1:3000/api/native/add_user',{
   method: "post",
   headers: {'Accept': 'application/json', 'content-type': 'application/json'},
   body: JSON.stringify(work)
 }).then(response => response.json())
.then((responsejson) =>{
  dispatch({
    type: 'ADD',
    payload: responsejson
  })
}).
catch(err => {
  console.warn(err);
})

}
export const login =(para) =>async dispatch => {
  const req = await fetch('http://10.42.0.1:3000/api/native',{
    method: "post",
    headers: {'Accept': 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify(para)
  });

   dispatch({
     type: 'LOGIN',
     payload: req
   })

}
export const start_login =() =>async dispatch => {

   dispatch({
     type: 'LOGIN_START',
     payload: 'start_load'
   })


}
export const login_success =(dats) =>async dispatch => {

   dispatch({
     type: 'LOGIN_SUCCESS',
     payload: dats
   })


}
export const login_fail =(fail) =>async dispatch => {

   dispatch({
     type: 'LOGIN_FAIL',
     payload: fail
   })


}
