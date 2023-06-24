'use client'

import React, { ChangeEvent } from 'react';
import styles from './StyledSelect.module.css'
import { useDispatch } from 'react-redux';
import { changeCinema, changeGenre } from '@/redux/slices/filter';


interface StyledSelectProps {
    title: string;
    optionDesc: string;
    options: { 
        name: string; 
        id: string; 
    }[]
}

const StyledSelect: React.FC<StyledSelectProps> = ({title, optionDesc, options}) => {
    const dispatch = useDispatch()

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
                    <select className={styles.select} onChange={handleSelectChange}>
                        <option hidden value=''>{optionDesc}</option>
                        {options.map((option, i) => (<option key={i} value={option.id}>{option.name}</option>))}
                    </select>
                </div>
        </label>
    );
}

export default StyledSelect;