'use client'

import React, { ChangeEvent } from 'react';
import styles from './StyledInput.module.css'
import useDebounce from '@/utils/useDebounce';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchText } from '@/redux/slices/filter';
import { RootState } from '@/redux/store';

function StyledInput() {
    const dispatch = useDispatch()
    const searchText = useSelector((state: RootState) => state.filter.searchText);
    // const [search, setSearch] = React.useState('')
    // const debouncedSearchTerm = useDebounce(search, 500)

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchText(e.target.value))
    }

    // React.useEffect(() => {
    //     dispatch(changeSearchText(debouncedSearchTerm))
    // },[debouncedSearchTerm, dispatch])

    return ( 
        <label>
            <div className={styles.input_title}>Название</div>
            <input 
                type="text"
                placeholder="Введите название"
                className={styles.input}
                value={searchText}
                onChange={handleSearch}
            />
        </label>
    );
}

export default StyledInput;