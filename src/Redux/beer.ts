import { BeerState, BeerAction, BeerActionTypes } from './types';
import { getBeerAsync } from './../Api/ApiService';
import { Dispatch } from 'react';


const defaultState: BeerState = {
    beers: [],
    loading: false,
    page:1, 
    currentBeers: [],
    idBeer: null,  // заменить на id
    description: []
}

export const BeerReducer = (state = defaultState, action: BeerAction): BeerState => {
    switch (action.type) {
        case BeerActionTypes.SET_BEER:
            return {
                ...state,
                beers: state.beers.concat(action.payload)
            }
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


export const fetchBeer = (numberPage:number = 1, amountBeer?:number) => {
    return async (dispatch: Dispatch<BeerAction>) => {
        dispatch({
            type: BeerActionTypes.SET_LOADING,
            payload:true
        })
        try {
            const response = await getBeerAsync(numberPage)
            
            dispatch({
                type: BeerActionTypes.SET_BEER,
                payload: response
            })
            dispatch({
                type: BeerActionTypes.SET_CURRENT_ARRAY,
                payload: response
            })
        } catch (error) {
            console.log(error);

        }
        dispatch({
            type: BeerActionTypes.SET_LOADING,
            payload:false
        })
    }
}
