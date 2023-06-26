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
import FilmCounter from '../FilmCounter/FilmCounter';

interface FilmCardProps {
    film: FilmAttributes
}

const FilmCard:React.FC<FilmCardProps> = ({film}) => {
    const router = useRouter()
    const pathname = usePathname()
    const genreRU = translateGenre(film?.genre)

    return ( 
        <div className={styles.filmCard_wrapper}>
            <div className={styles.filmCard_promo__info}>
                <Image
                    src={film.posterUrl}
                    alt='обложка'
                    width={100}
                    height={120}
                />
                <div>
                    <div className={styles.filmCard_promo__title} 
                        onClick={() => changeRoute(`/film/${film.id}`, router, pathname)}>
                        {film.title}
                    </div>
                    <div className={styles.filmCard_promo__subtitle}>{genreRU}</div>
                </div>
            </div>
            <FilmCounter film={film} pathname={pathname}/>
        </div>
    );
}

export default FilmCard;