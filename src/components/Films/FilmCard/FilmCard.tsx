'use client'

import Image from 'next/image';
import styles from './FilmCard.module.css'
import MinusIcon from './assets/Minus.svg'
import PlusIcon from './assets/Plus.svg'
import DeleteIcon from './assets/Delete.svg'
import { usePathname, useRouter } from 'next/navigation';
import { changeRoute } from '@/utils/router';
import React from 'react';
import { FilmAttributes } from '@/components/types';
import { translateGenre } from '@/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, deleteItem, increment } from '@/redux/slices/cart';
import { RootState } from '@/redux/store';

interface FilmCardProps {
    film: FilmAttributes
}

const FilmCard:React.FC<FilmCardProps> = ({film}) => {
    const router = useRouter()
    const count = useSelector((state: RootState) => {
        return state.cart[Object.keys(state.cart).filter(obj => obj === JSON.stringify(film))[0]] || 0
    })

    const pathname = usePathname()
    const genreRU = translateGenre(film.genre)
    const dispatch = useDispatch()

    const handlePlusClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        if(count < 30){
            dispatch(increment(JSON.stringify(film)))
        }
    }, [count, dispatch, film])

    const handleMinusClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        if(count >= 1){
            dispatch(decrement(JSON.stringify((film))))
        }
    },[count, dispatch, film])

    const handleDelete = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        dispatch(deleteItem(JSON.stringify((film))))
    },[dispatch, film])

    return ( 
        <div className={styles.filmCard_wrapper}>
            <div className={styles.filmCard_promo__info} onClick={() => changeRoute(`/film/${1}`, router, pathname)}>
                <Image
                    src={film.posterUrl}
                    alt='обложка'
                    width={100}
                    height={120}
                />
                <div>
                    <div className={styles.filmCard_promo__title}>{film.title}</div>
                    <div className={styles.filmCard_promo__subtitle}>{genreRU}</div>
                </div>
            </div>
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
        </div>
    );
}

export default FilmCard;