import { getFilms } from '@/api/CinemasService';
import { FilmAttributes } from '@/components/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface InitialStateProps {
    films: FilmAttributes[];
  }

const initialState: InitialStateProps = {
    films: [],
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: { }
});

export const filmsReducer = filmsSlice.reducer;
