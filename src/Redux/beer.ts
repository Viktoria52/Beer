

const defaultState={

}



export const BeerReducer = (state = defaultState, action) =>{
    switch(action.type):
    case SOME: return{}
    default:
        return state
}