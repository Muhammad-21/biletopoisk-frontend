'use client'

import React, { useEffect, useState } from 'react';
import StyledInput from '../StyledInput/StyledInput';
import StyledSelect from '../StyledSelect/StyledSelect';
import styles from './Filters.module.css'
import { CinemaAttributes, SelectOption } from '../types';
import { useDispatch } from 'react-redux';
import { reset } from '@/redux/slices/filter';
import { getRequest } from '@/api/common.api';


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

export const Filters = () => { 
    const dispath = useDispatch()
    const [cinemas, setCinemas] = useState<SelectOption[]>([]);

    const resetFilters = () => {
        dispath(reset())
    }

    useEffect(() => {
        getRequest<CinemaAttributes[]>('/cinemas').then(cinemas => {
            setCinemas(cinemas.map(cinema => ({ name: cinema.name, id: cinema.id })))
        })
    }, [])

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
                    <StyledSelect title='Кинотеатр' optionDesc='Выберите кинотеатр' options={cinemas}/>
                </div>
                <div className={styles.filter_clear} onClick={resetFilters}>Очистить фильтры</div>
            </div>
        </div>
    );
}