import * as actionTypes from "./actionTypes"
import axios from "axios";
import qs from "qs";


export function getAbilitiyRatingSuccess(res){
  return {type:actionTypes.GETABILITIYRATINGSSUCCESS,
    abilitiyRatingList:res
}}

export function getAbilitiyRatings() {
  return function(dispatch){
     axios.get("/api/ability_rating/").then((res) => dispatch(getAbilitiyRatingSuccess(res.data)));

  }}
  export function getActiveAbilitiyRatings(item) {
    return {type:actionTypes.ACTIVEABILITITYRATING,
      activeabilityrating:item
  }}
  
  export function deleteAbilitiyRatings(item) {
    return function(dispatch){
      axios
      .delete(`/api/ability_rating/${item.id}/`)
      .then((res) => dispatch(getAbilitiyRatings()));
      
    }}
    export function updateAbilitiyRatings(item) {
      return function(dispatch){
        axios
        .put(`/api/ability_rating/${item.id}/`, qs.stringify(item))
        .then((res) => dispatch(getAbilitiyRatings()));        
      }}

      export function addAbilitiyRatings(item) {
        return function(dispatch){
          axios
          .post("/api/ability_rating/", qs.stringify(item))
          .then((res) => dispatch(getAbilitiyRatings())).catch((err) => console.log(err));;        
        }}
