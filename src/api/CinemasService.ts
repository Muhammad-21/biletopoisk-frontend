import { CinemaAttributes, FilmAttributes } from "@/components/types"

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