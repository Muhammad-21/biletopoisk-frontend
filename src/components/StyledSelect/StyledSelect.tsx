'use client'

import React, { ChangeEvent } from 'react';
import styles from './StyledSelect.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeCinema, changeGenre } from '@/redux/slices/filter';
import { RootState } from '@/redux/store';
import { SelectOption } from '../types';

interface StyledSelectProps {
    title: string;
    optionDesc: string;
    options: SelectOption[]
}

const StyledSelect: React.FC<StyledSelectProps> = ({title, optionDesc, options}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector((state: RootState) => title === 'Жанр' ? state.filter.genre : state.filter.cinemaId)

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        if(title === 'Жанр'){
            dispatch(changeGenre(value))
        }else if(title === 'Кинотеатр'){
            dispatch(changeCinema(value))
        }
    }

    return ( 
        <label>
            <div className={styles.select_title}>{title}</div>
                <div className={styles.wrapper}>
                    <select value={selectValue} className={styles.select} onChange={handleSelectChange}>
                        <option hidden value=''>{optionDesc}</option>
                        {options.map((option, i) => (<option key={i} value={option.id}>{option.name}</option>))}
                    </select>
                </div>
        </label>
    );
}

export default StyledSelect;