import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function pabilitiesReducers(state=initialState.pabilitiesData,action){
    switch (action.type) {
        case actionTypes.GETPABILITIESSUCCESS:
        return state =action.pabilitiesList
        default:
            return state;
            
    }
}
