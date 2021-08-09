export interface BeerState {
    loading: boolean;
    page: number;
    currentBeers: any[]
    idBeer: number | null,
    description: any[]
}
export enum BeerActionTypes {
    GET_ONE_BEER = 'GET_ONE_BEER', //?
    SET_LOADING = 'SET_LOADING',
    // ADD_PAGE_BEER = 'ADD_PAGE_BEER',
    SET_BEER_PAGE = 'SET_BEER_PAGE',
    SET_CURRENT_ARRAY = 'SET_CURRENT_ARRAY',
    SET_DESCRIPTION = 'SET_DESCRIPTION'
}
export interface GetOneBeerAction {     // ??
    type: BeerActionTypes.GET_ONE_BEER;
}
export interface SetLoadingAction {
    type: BeerActionTypes.SET_LOADING;
    payload: boolean
}

export interface SetBeerPageAction {
    type: BeerActionTypes.SET_BEER_PAGE;
    payload: number
}
export interface SetCurrentBeerArrayAction { // for pagination 
    type: BeerActionTypes.SET_CURRENT_ARRAY;
    payload: any[]
}
export interface SetDescriptionBeerAction { // for pagination 
    type: BeerActionTypes.SET_DESCRIPTION
    payload: number
}

export type BeerAction =
     // GetOneBeerAction
    | GetOneBeerAction
    | SetLoadingAction
    | SetBeerPageAction
    | SetCurrentBeerArrayAction
    | SetDescriptionBeerAction
