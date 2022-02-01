import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function activeItemReducers(state=initialState.projectData,action){
    switch (action.type) {
        case actionTypes.ACTIVEITEM:
        return state =action.activeItem
        default:
            return state;
            
    }
}
