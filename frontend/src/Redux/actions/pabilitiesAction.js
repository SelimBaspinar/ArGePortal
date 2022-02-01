import * as actionTypes from "./actionTypes"
import axios from "axios";
import qs from "qs";


export function getPAbilitiesSuccess(res){
  return {type:actionTypes.GETPABILITIESSUCCESS,
    pabilitiesList:res
}}

export function getPAbilities() {
  return function(dispatch){
     axios.get("/api/projectsabilites/").then((res) => dispatch(getPAbilitiesSuccess(res.data)));

  }}
  export function getActivePAbilities(item) {
    return {type:actionTypes.ACTIVEPABILITITES,
      activeabilities:item
  }}
  
  export function deletePAbility(item) {
    return function(dispatch){
      axios
      .delete(`/api/projectsabilites/${item.id}/`)
      .then((res) => dispatch(getPAbilities()));
      
    }}
    export function updatePAbility(item) {
      return function(dispatch){
        axios
        .put(`/api/projectsabilites/${item.id}/`, qs.stringify(item))
        .then((res) => dispatch(getPAbilities()));        
      }}

      export function addPAbility(item) {
        return function(dispatch){
          axios
          .post("/api/projectsabilites/", qs.stringify(item)).then((res) => dispatch(getPAbilities()))
          .catch((err) => console.log(err));;        
        }}
