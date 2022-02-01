import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function activeGIPReducers(state=initialState.getinvolvedprojectData,action){
    switch (action.type) {
        case actionTypes.ACTIVEGETINVOLVEDPROJECT:
        return state =action.department
        default:
            return state;
            
    }
}
