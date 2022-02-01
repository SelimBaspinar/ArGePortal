import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function dataListReducers(state=initialState.projectData,action){
    switch (action.type) {
        case actionTypes.GETDATASUCCESS:
        return state =action.projectList
        default:
            return state;
            
    }
}
