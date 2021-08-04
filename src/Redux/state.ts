import { configureStore } from "@reduxjs/toolkit";
import { BeerReducer } from "./beer";

export const store = configureStore({
    reducer:{
        BeerReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch 





// в обычных компонентах будет это ->
// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector