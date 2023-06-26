import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
    genre: string;
    cinemaId: string;
    searchText: string;
}

const initialState: FilterState = {
    genre: '',
    cinemaId: '',
    searchText: ''
}

const filterFilmsSlice = createSlice({
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


export const { changeCinema, changeGenre, changeSearchText, reset } = filterFilmsSlice.actions

export const filterReducer = filterFilmsSlice.reducer