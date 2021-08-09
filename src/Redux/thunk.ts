import {Dispatch} from "react";
import {BeerAction, BeerActionTypes} from "./types";
import {getBeerAsync} from "../Api/ApiService";

export const fetchBeer = (numberPage: number = 1, amountBeer: number = 10) => {
    return async (dispatch: Dispatch<BeerAction>) => {
        dispatch({
            type: BeerActionTypes.SET_LOADING,
            payload: true
        })
        try {
            const response = await getBeerAsync(numberPage, amountBeer)
            dispatch({
                type: BeerActionTypes.SET_CURRENT_ARRAY,
                payload: response
            })
        } catch (error) {
            console.log(error);
        }
        dispatch({
            type: BeerActionTypes.SET_LOADING,
            payload: false
        })
    }
}