import { BASE_URL } from "@/api/common.api";
import { FilmAttributes } from "@/components/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const filmsAPI = createApi({
    reducerPath: 'filmsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: build => ({
        getMovies: build.query<FilmAttributes[], string>({
            query: (cinemaId) => ({
                url: '/movies' + (cinemaId ? `/?cinemaId=${cinemaId}` : '')
            }),
        })
    })
})

export const { useGetMoviesQuery } = filmsAPI