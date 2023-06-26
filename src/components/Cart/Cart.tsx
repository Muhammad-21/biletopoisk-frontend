'use client'

import { useSelector } from 'react-redux';
import styles from './Cart.module.css'
import { selectTotalItemCount } from '@/redux/slices/cart/selector';
import { RootState } from '@/redux/store';
import FilmCard from '../Films/FilmCard/FilmCard';
import { useEffect, useState } from 'react';
import { FilmAttributes } from '../types';
import { getRequest } from '@/api/common.api';

function Cart() {
    const ticketCount = useSelector(selectTotalItemCount)
    const filmsIds = useSelector((state: RootState) => Object.keys(state.cart))
    const cart = useSelector((state: RootState) => state.cart)
    const [cartFilms, setCartFilms] = useState<FilmAttributes[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Promise.all(filmsIds.map(filmId => getRequest<FilmAttributes>(`/movie?movieId=${filmId}`)))
            .then(data => setCartFilms(data))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        setCartFilms(prev => prev.filter(film => cart[film.id]))
    }, [filmsIds.length])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(ticketCount === 0){
        return <div>Корзина пуста</div>
    }

    return ( 
        <div className={styles.cart_wrapper}>
            <div className={styles.films_wrapper}>
                {cartFilms.map(film => <FilmCard key={film.id} film={film}/>)}
            </div>
            <div className={styles.cart_ticket}>
                <div className={styles.cart_ticket__title_count}>Итого билетов:</div>
                <div className={styles.cart_ticket__title_count}>{ticketCount}</div>
            </div>
        </div>
    );
}

export default Cart;