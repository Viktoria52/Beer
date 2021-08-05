export interface BeerState {
    beers: any[];
   
}
export enum BeerActionTypes {
    SET_BEER = 'SET_BEER',
}
interface FetchBeerAction {
    type: BeerActionTypes.SET_BEER;
}

export type BeerAction = FetchBeerAction 