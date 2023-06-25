import { CinemaAttributes, FilmAttributes, ReviewAttributes } from "@/components/types"

const URL = 'http://localhost:3001/api'

export const getCinemas = async (): Promise<CinemaAttributes[]> => {
    const cinemasEndpoint = '/cinemas'
    const res = await fetch(URL + cinemasEndpoint)
    return res.json()
}

export const getFilms = async (cinemaId?: string):Promise<FilmAttributes[]> => {
    const filmsEndpoint = '/movies'
    const filmsFromCinemaEndpoint = cinemaId ? `?cinemaId=` + cinemaId : ''
    const res = await fetch(URL + filmsEndpoint + filmsFromCinemaEndpoint)
    return res.json()
}

export const getFilm = async (id: string):Promise<FilmAttributes> => {
    const res = await fetch(URL + `/movie?movieId=${id}`)
    return res.json()
}

export const getFilmReviews = async (filmId: string):Promise<ReviewAttributes[]> => {
    const res = await fetch(URL + `/reviews?movieId=${filmId}`)
    return res.json()
}