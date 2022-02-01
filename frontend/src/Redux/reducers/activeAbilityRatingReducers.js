import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function activeAbilityRatingReducers(state=initialState.abilitiesData,action){
    switch (action.type) {
        case actionTypes.ACTIVEABILITITYRATING:
        return state =action.activeabilityrating
        default:
            return state;
            
    }
}
