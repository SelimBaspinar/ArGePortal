import * as actionTypes from "./actionTypes"
import axios from "axios";
import qs from "qs";


export function getDataSuccess(res){
  return {type:actionTypes.GETDATASUCCESS,
    projectList:res
}}

export function getData() {
  return function(dispatch){
     axios.get("/api/projects/").then((res) => dispatch(getDataSuccess(res.data)));

  }}
  export function getActiveItem(item) {
    return {type:actionTypes.ACTIVEITEM,
      activeItem:item
  }}
  
  export function deleteData(item) {
    return function(dispatch){
      axios
      .delete(`/api/projects/${item.id}/`)
      .then((res) => dispatch(getData()));
      
    }}
    export function updateData(item) {
      return function(dispatch){
        axios
        .put(`/api/projects/${item.id}/`, qs.stringify(item))
        .then((res) => dispatch(getData()));        
      }}

      export function addData(item) {
        return function(dispatch){
          axios
          .post("/api/projects/", qs.stringify(item))
          .then((res) => dispatch(getData())).catch((err) => console.log(err));;        
        }}
