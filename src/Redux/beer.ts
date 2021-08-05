import { BeerState, BeerAction, BeerActionTypes } from './types';
import { getBeerAsync } from './../Api/ApiService';
import { Dispatch } from 'react';


const defaultState: BeerState = {
    beers: [],
    loading: false
}

export const BeerReducer = (state = defaultState, action: BeerAction): BeerState => {
    switch (action.type) {
        case BeerActionTypes.SET_BEER:
            return {
                ...state,
                beers: action.payload
            }
        default:
            return state
    }
}


export const fetchBeer = () => {
    return async (dispatch: Dispatch<BeerAction>) => {
        dispatch({
            type: BeerActionTypes.SET_LOADING,
            payload:true
        })
        try {
            const response = await getBeerAsync()
            console.log(response);
            dispatch({
                type: BeerActionTypes.SET_BEER,
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
