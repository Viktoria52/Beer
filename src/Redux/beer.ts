import { BeerState, BeerAction, BeerActionTypes } from './types';

const defaultState: BeerState = {
    // beers: [],
    loading: false,
    page:1, 
    currentBeers: [],
    idBeer: null,
    description: []
}

export const BeerReducer = (state = defaultState, action: BeerAction): BeerState => {
    switch (action.type) {
        // case BeerActionTypes.SET_BEER:
        //     return {
        //         ...state,
        //         beers: state.beers.concat(action.payload)
        //     }
            case BeerActionTypes.SET_LOADING:
                return{
                    ...state, 
                    loading: action.payload
                }
            case BeerActionTypes.SET_BEER_PAGE:
                return{
                    ...state, 
                    page: action.payload
                }
            case BeerActionTypes.SET_CURRENT_ARRAY:
                return{
                    ...state, 
                    currentBeers: action.payload
                }
            case BeerActionTypes.SET_DESCRIPTION:
                return{
                    ...state, 
                    idBeer: action.payload,
                    description: state.currentBeers.filter((value)=> value.id === action.payload)
                }
        default:
            return state
    }
}


