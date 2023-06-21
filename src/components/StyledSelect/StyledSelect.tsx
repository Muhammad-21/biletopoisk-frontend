import React from 'react';
import styles from './StyledSelect.module.css'

interface StyledSelectProps {
    title: string;
    optionDesc: string;
    options: string[]
}

const StyledSelect: React.FC<StyledSelectProps> = ({title, optionDesc, options}) => {
    return ( 
        <label>
            <div className={styles.select_title}>{title}</div>
                <div className={styles.wrapper}>
                    <select className={styles.select}>
                        <option hidden value=''>{optionDesc}</option>
                        {options.map((i, option) => (<option key={i}>{option}</option>))}
                    </select>
                </div>
        </label>
    );
}

export default StyledSelect;