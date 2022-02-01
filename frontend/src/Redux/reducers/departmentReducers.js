import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function departmentReducers(state=initialState.departmentData,action){
    switch (action.type) {
        case actionTypes.GETDEPARTMENTSUCCESS:
        return state =action.departmentlist
        default:
            return state;
            
    }
}
