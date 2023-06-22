'use client'

import Image from 'next/image';
import styles from './FilmCard.module.css'
import MinusIcon from './assets/Minus.svg'
import PlusIcon from './assets/Plus.svg'
import DeleteIcon from './assets/Delete.svg'
import { usePathname, useRouter } from 'next/navigation';
import { changeRoute } from '@/utils/router';
import React from 'react';

function FilmCard() {
    const router = useRouter()
    const [count, setCount] = React.useState<number>(0)
    const pathname = usePathname()

    const handlePlusClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        count < 30 && setCount(prev => prev + 1)  
    }

    const handleMinusClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        count >= 1 && setCount(prev => prev - 1) 
    }

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        console.log('delete')
    }

    return ( 
        <div className={styles.filmCard_wrapper} onClick={() => changeRoute(`/film/${1}`, router)}>
            <div className={styles.filmCard_promo__info}>
                <Image
                    src='https://i.postimg.cc/pdCLNMqX/1.webp'
                    alt='обложка'
                    width={100}
                    height={120}
                />
                <div>
                    <div className={styles.filmCard_promo__title}>Властелин колец: Братство кольца</div>
                    <div className={styles.filmCard_promo__subtitle}>Фэнтези</div>
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