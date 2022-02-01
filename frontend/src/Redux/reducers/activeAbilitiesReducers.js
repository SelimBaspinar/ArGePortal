import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function activeAbilitiesReducers(state=initialState.abilitiesData,action){
    switch (action.type) {
        case actionTypes.ACTIVEABILITITES:
        return state =action.activeabilities
        default:
            return state;
            
    }
}
