export interface BeerState {
    beers: any[];
    loading: boolean
}
export enum BeerActionTypes {
    SET_BEER = 'SET_BEER',
    GET_ONE_BEER = 'GET_ONE_BEER',
    SET_LOADING = 'SET_LOADING'
}
export interface FetchBeerAction {
    type: BeerActionTypes.SET_BEER;
    payload: any[]
}
export interface GetOneBeerAction {     // ??
    type: BeerActionTypes.GET_ONE_BEER;
   
}
export interface SetLoadingAction {
    type: BeerActionTypes.SET_LOADING;
    payload: boolean
    
}

export type BeerAction = FetchBeerAction
    | GetOneBeerAction
    | SetLoadingAction