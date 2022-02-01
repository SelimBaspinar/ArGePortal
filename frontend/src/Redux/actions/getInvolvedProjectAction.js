import * as actionTypes from "./actionTypes"
import axios from "axios";
import qs from "qs";


export function getInvolvedProjectSuccess(res){
  return {type:actionTypes.GETINVOLVEDPROJECTSUCCESS,
    payload:res
}}

export function getInvolvedProject() {
  return function(dispatch){
     axios.get("/api/getinvolvedprojects/").then((res) => dispatch(getInvolvedProjectSuccess(res.data)));

  }}
  export function getActiveInvolvedProject(item) {
    return {type:actionTypes.ACTIVEGETINVOLVEDPROJECT,
        activeinvolvedproject:item
  }}
  
  export function deleteGetInvolvedProject(item) {
    return function(dispatch){
      axios
      .delete(`/api/getinvolvedprojects/${item.id}/`)
      .then((res) => dispatch(getInvolvedProject()));
      
    }}
    export function updateGetInvolvedProject(item) {
      return function(dispatch){
        axios
        .put(`/api/getinvolvedprojects/${item.id}/`, qs.stringify(item))
        .then((res) => dispatch(getInvolvedProject()));        
      }}

      export function addGetInvolvedProject(item) {
        return function(dispatch){
          axios
          .post("/api/getinvolvedprojects/", qs.stringify(item))
          .then((res) => dispatch(getInvolvedProject())).catch((err) => console.log(err));;        
        }}
