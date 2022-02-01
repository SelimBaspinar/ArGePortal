import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function abilitiyRatingReducers(state=initialState.abilitiyRatingData,action){
    switch (action.type) {
        case actionTypes.GETABILITIYRATINGSSUCCESS:
        return state =action.abilitiyRatingList
        default:
            return state;
            
    }
}
