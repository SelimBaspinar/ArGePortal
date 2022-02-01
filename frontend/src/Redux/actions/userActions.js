import * as actionTypes from "./actionTypes"
import axios from "axios";
import qs from "qs";

export function getUserSuccess(res){
  return {type:actionTypes.GETUSERSUCCESS,
    userlist:res
}}

export function getUsers() {
  return function(dispatch){
   axios.get("/api/users/").then((res) => dispatch(getUserSuccess(res.data)));
  }}


  export function getActiveUser(user) {
    return {type:actionTypes.ACTIVEUSER,
        user:user
  }}
  
  export function deleteUser(user) {
    return function(dispatch){
      axios
      .delete(`/api/users/${user.id}/`)
      .then((res) => dispatch(getUsers()));
      
    }}
    export function editUser(user) {
      return function(dispatch){
        axios
        .put(`/api/users/${user.id}/`, qs.stringify(user))
        .then((res) => dispatch(getUsers()));        
      }}

      export function addUser(user) {
        return async dispatch=>{
        const {data}=await axios.post("/api/users/", qs.stringify(user)).catch((err)=>console.log(err))
        dispatch(getActiveUser(data))
        }}
       
