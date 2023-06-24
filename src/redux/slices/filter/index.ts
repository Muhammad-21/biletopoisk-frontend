import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    genre: string;
    cinemaId: string;
    searchText: string;
}

const initialState: CartState = {
    genre: '',
    cinemaId: '',
    searchText: ''
}

const filterCInemaSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeGenre: (state, {payload}) => {
            state.genre = payload
        },
        changeCinema: (state, {payload}) => {
            state.cinemaId = payload
        },
        changeSearchText: (state, {payload}) => {
            state.searchText = payload
        },
        reset: () => initialState,
    }
})


export const { changeCinema, changeGenre, changeSearchText, reset } = filterCInemaSlice.actions

export const filterReducer = filterCInemaSlice.reducer