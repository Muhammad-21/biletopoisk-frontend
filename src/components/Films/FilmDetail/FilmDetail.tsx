'use client'

import Image from 'next/image';
import styles from './FilmDetail.module.css'
import React, { useEffect, useState } from 'react';
import { FilmAttributes } from '@/components/types';
import { usePathname } from 'next/navigation';
import FilmCounter from '../FilmCounter/FilmCounter';
import { translateGenre } from '@/utils/helpers';
import Reviews from './Reviews/Reviews';
import { getRequest } from '@/api/common.api';

const FilmDetail = () => {
    const pathname = usePathname();
    const [film, setFilm] = useState<FilmAttributes | null>(null);

    const pathnameSplited = pathname.split('/');
    const id = pathnameSplited[pathnameSplited.length - 1]

    useEffect(() => {
        getRequest<FilmAttributes>(`/movie?movieId=${id}`).then((data) => setFilm(data))
    }, [id])

    if (film) {
        return ( 
            <>
                <div className={styles.film_detail}>
                    <div className={styles.film_detail__poster}>
                        <Image
                            src={film.posterUrl ?? ''}
                            alt='обложка'
                            width={400}
                            height={500} />
                    </div>
                    <div className={styles.film_detail__info}>
                        <div className={styles.film_detail__info__titleline}>
                            <h3>{film.title}</h3>
                            <FilmCounter film={film} pathname={pathname}/>
                        </div>
                        <div className={styles.film_detail__info__table_like_info}>
                            <div><span className={styles.film_detail__attribute_bold}>Жанр:</span> {translateGenre(film.genre)}</div>
                            <div><span className={styles.film_detail__attribute_bold}>Год выпуска:</span> {film.releaseYear}</div>
                            <div><span className={styles.film_detail__attribute_bold}>Режиссер:</span> {film.director}</div>
                            <div><span className={styles.film_detail__attribute_bold}>Рейтинг:</span> {film.rating}</div>
                        </div>
                        <div className={styles.film_detail__info__description}>
                            <div className={styles.film_detail__attribute_bold}>Описание</div>
                            <div>{film.description}</div>
                        </div>
                    </div>
                </div>
                <Reviews filmId={film.id}/>
            </>
        );
    }
}

export default FilmDetail;