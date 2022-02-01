import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function activeDepartmentReducers(state=initialState.departmentData,action){
    switch (action.type) {
        case actionTypes.ACTIVEDEPARTMENT:
        return state =action.department
        default:
            return state;
            
    }
}
