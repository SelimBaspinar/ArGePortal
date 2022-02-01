import * as actionTypes from "./actionTypes"
import axios from "axios";
import qs from "qs";

export function getDepartmentSuccess(res){
  return {type:actionTypes.GETDEPARTMENTSUCCESS,
    departmentlist:res
}}

export function getDepartments() {
  return function(dispatch){
     axios.get("/api/departments/").then((res) => dispatch(getDepartmentSuccess(res.data)));

  }}


  export function getActiveDepartment(department) {
    return {type:actionTypes.ACTIVEDEPARTMENT,
        department:department
  }}
  
  export function deleteDepartment(department) {
    return function(dispatch){
      axios
      .delete(`/api/departments/${department.id}/`)
      .then((res) => dispatch(getDepartments()));
      
    }}
    export function editDepartment(department) {
      return function(dispatch){
        axios
        .put(`/api/departments/${department.id}/`, department)
        .then((res) => dispatch(getDepartments()));        
      }}

      export function addDepartment(department) {
        return function(dispatch){
          axios
          .post("/api/departments/", qs.stringify(department))
          .then((res) => dispatch(getDepartments()));        
        }}
