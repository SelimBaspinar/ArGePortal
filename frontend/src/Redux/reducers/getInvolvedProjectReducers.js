import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function getInvolvedProjectReducers(state=initialState.getinvolvedprojectData,action){
    switch (action.type) {
        case actionTypes.GETINVOLVEDPROJECTSUCCESS:
        return state =action.payload
        default:
            return state;
            
    }
}
