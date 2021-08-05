import { BeerState, BeerAction } from './types';


const defaultState:BeerState={
    beers: []
}



export const BeerReducer = (state = defaultState, action:BeerAction):BeerState =>{
    switch(action.type){
    case FetchBeerAction.SET_BEER: 
    return{...state}

    default:
        return state}
}