'use client'

import Image from 'next/image';
import styles from './FilmCounter.module.css'
import MinusIcon from './assets/Minus.svg'
import PlusIcon from './assets/Plus.svg'
import DeleteIcon from './assets/Delete.svg'
import React from 'react';
import { FilmAttributes } from '@/components/types';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, deleteItem, increment } from '@/redux/slices/cart';
import { RootState } from '@/redux/store';

interface FilmCounterProps {
    film: FilmAttributes;
    pathname: string;
}

const FilmCounter: React.FC<FilmCounterProps> = ({ film, pathname }) => {
    const count = useSelector((state: RootState) => {
        return state.cart[film.id] || 0
    })

    const dispatch = useDispatch()

    const handlePlusClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        if(count < 30){
            dispatch(increment(film.id))
        }
    }, [count, dispatch, film])

    const handleMinusClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        if(count >= 1){
            dispatch(decrement(film.id))
        }
    },[count, dispatch, film])

    const handleDelete = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        dispatch(deleteItem(film.id))
    },[dispatch, film])


    return ( 
            <div className={styles.filmCard_counter}>
                <div className={count > 0 ? styles.filmCard_button_active : styles.filmCard_button_disabled} onClick={handleMinusClick}>
                    <Image
                        src={MinusIcon}
                        alt='Minus Icon'
                    />
                </div>
                <div className={styles.filmCard_counter__num}>
                    {count}
                </div>
                <div className={count < 30 ? styles.filmCard_button_active : styles.filmCard_button_disabled} onClick={handlePlusClick}>
                    <Image
                        src={PlusIcon}
                        alt='Plus Icon'
                    />
                </div>
                {pathname === '/cart' && <div className={styles.film_delete} onClick={handleDelete}>
                    <Image
                        src={DeleteIcon}
                        alt='Delete Icon'
                    />
                </div>}
            </div>
    );
}

export default FilmCounter