'use client'

import React from 'react';
import StyledInput from '../StyledInput/StyledInput';
import StyledSelect from '../StyledSelect/StyledSelect';
import styles from './Filters.module.css'
import { CinemaAttributes } from '../types';
import { useDispatch } from 'react-redux';
import { reset } from '@/redux/slices/filter';


interface FiltersProps {
    cinemas: CinemaAttributes[]
}

const genres = [
    {
        id: 'action',
        name: 'Экшн'
    },
    {
        id: 'comedy',
        name: 'Комедия'
    },
    {
        id: 'fantasy',
        name: 'Фэнтези'
    },
    {
        id: 'horror',
        name: 'Хоррор'
    }
]

export const Filters:React.FC<FiltersProps> = ({cinemas}) => {
    const cinemaNames = cinemas.map(cinema => {
        return {
            name: cinema.name, 
            id: cinema.id
        }
    })
    const dispath = useDispatch()

    const resetFilters = () => {
        dispath(reset())
    }

    return (  
        <div className={styles.filters_wrapper}>
            <div className={styles.filter_title}>Фильтр поиска</div>
            <div className={styles.filter_items__wrapper}>
                <div className={styles.filter_item}>
                    <StyledInput/>
                </div>
                <div className={styles.filter_item}>
                    <StyledSelect title='Жанр' optionDesc='Выберите жанр' options={genres}/>
                </div>
                <div className={styles.filter_item}>
                    <StyledSelect title='Кинотеатр' optionDesc='Выберите кинотеатр' options={cinemaNames}/>
                </div>
                <div className={styles.filter_clear} onClick={resetFilters}>Очистить фильтры</div>
            </div>
        </div>
    );
}