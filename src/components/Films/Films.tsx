'use client'

import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard/FilmCard';
import styles from './Films.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { useGetMoviesQuery } from '@/redux/services/films/films';
import { FilmAttributes } from '../types';
import useDebounce from '@/utils/useDebounce';



export const Films:React.FC = () => {
    const { genre, cinemaId, searchText } = useSelector((state: RootState) => state.filter)
    const debouncedSearchText = useDebounce(searchText, 500)

    const {data, isLoading, error} = useGetMoviesQuery(cinemaId);
    const [films, setFilms] = useState<FilmAttributes[] | null>(null);

    useEffect(() => {
        if(data) {
            setFilms(data.filter(film => {
                return (!genre || film.genre === genre) && 
                (!debouncedSearchText || film.title.toLowerCase().includes(debouncedSearchText.toLowerCase()))
            }))
        }
    }, [data, genre, debouncedSearchText])

    if(isLoading){
        return ( 
            <div>
                Loading...
            </div>
        );
    }

    if(films?.length === 0){
        return (
            <div className={styles.films_wrapper}>
                Ничего не нашлось :(
            </div>
        )
    }

    return ( 
        <div className={styles.films_wrapper}>
            {films?.map(film => <FilmCard film={film} key={film.id}/>)}
        </div>
    );
}