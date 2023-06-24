'use client'

import React from 'react';
import FilmCard from './FilmCard/FilmCard';
import styles from './Films.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchInitialData } from '@/redux/slices/films';



export const Films:React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {data, loading} = useSelector((state: RootState) => state.films)
    const { genre, cinemaId, searchText } = useSelector((state: RootState) => state.filter)

    console.log(data)

    React.useEffect(() => {
        dispatch(fetchInitialData({cinemaId, genre, searchText}))
    }, [dispatch, cinemaId, genre, searchText])

    if(loading){
        return ( 
            <div>
                Loading
            </div>
        );
    }

    if(data.length === 0){
        return (
            <div className={styles.films_wrapper}>
                Ничего не нашлось :(
            </div>
        )
    }

    return ( 
        <div className={styles.films_wrapper}>
            {data.map(film => <FilmCard film={film} key={film.id}/>)}
        </div>
    );
}