import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    [key: string]: number;
}

const initialState: CartState = {}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, {payload}) => {
            const count = state[payload] || 0;
            state[payload] = count + 1;
          },
        decrement: (state, {payload}) => {
            const count = state[payload];

            if (!count) {
                return;
            }

            if (count === 1) {
                delete state[payload];
                return;
            }

            state[payload] = count - 1;
        },
        deleteItem: (state, {payload}) => {
            if(state[payload]){
                delete state[payload]
            }
        },
        reset: () => initialState,
    }
})


export const { increment, decrement, reset, deleteItem } = cartSlice.actions

export const cartReducer = cartSlice.reducer