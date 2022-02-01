import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function abilitiesReducers(state=initialState.abilitiesData,action){
    switch (action.type) {
        case actionTypes.GETABILITIESSUCCESS:
        return state =action.abilitesList
        default:
            return state;
            
    }
}
