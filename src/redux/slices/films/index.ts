import { getFilms } from '@/api/CinemasService';
import { FilmAttributes } from '@/components/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchInitialData = createAsyncThunk('filmsSlice', async ({ cinemaId, genre, searchText }: { cinemaId: string; genre: string; searchText: string}) => {
    let films = await getFilms(cinemaId)

    if(genre){
        films = films.filter(film => film.genre === genre)
    }

    if(searchText){
        films = films.filter(film => film.title.toLowerCase().includes(searchText.toLowerCase()))
    }

    return films
})


interface InitialStateProps {
    data: FilmAttributes[];
    loading: boolean;
  }

const initialState: InitialStateProps = {
    data: [],
    loading: true,
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {   },
    extraReducers: (builder) => {
        builder
        .addCase(fetchInitialData.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchInitialData.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
    },
});

export const filmsReducer = filmsSlice.reducer;
