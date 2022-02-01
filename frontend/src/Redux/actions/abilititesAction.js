import * as actionTypes from "./actionTypes"
import axios from "axios";
import qs from "qs";


export function getAbilitiesSuccess(res){
  return {type:actionTypes.GETABILITIESSUCCESS,
    abilitesList:res
}}

export function getAbilities() {
  return function(dispatch){
     axios.get("/api/abilities/").then((res) => dispatch(getAbilitiesSuccess(res.data)));

  }}
  export function getActiveAbilities(item) {
    return {type:actionTypes.ACTIVEABILITITES,
      activeabilities:item
  }}
  
  export function deleteAbility(item) {
    return function(dispatch){
      axios
      .delete(`/api/abilities/${item.id}/`)
      .then((res) => dispatch(getAbilities()));
      
    }}
    export function updateAbility(item) {
      return function(dispatch){
        axios
        .put(`/api/abilities/${item.id}/`, qs.stringify(item))
        .then((res) => dispatch(getAbilities()));        
      }}

      export function addAbility(item) {
        return function(dispatch){
          axios
          .post("/api/abilities/", qs.stringify(item))
          .catch((err) => console.log(err));;        
        }}
