import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { filterReducer } from "./slices/filter";
import { filmsReducer } from "./slices/films";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        films: filmsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch