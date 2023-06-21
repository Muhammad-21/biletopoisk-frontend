import StyledInput from '../StyledInput/StyledInput';
import StyledSelect from '../StyledSelect/StyledSelect';
import styles from './Filters.module.css'

function Filters() {
    return (  
        <div className={styles.filters_wrapper}>
            <div className={styles.filter_title}>Фильтр поиска</div>
            <div className={styles.filter_items__wrapper}>
                <div className={styles.filter_item}>
                    <StyledInput/>
                </div>
                <div className={styles.filter_item}>
                    <StyledSelect title='Жанр' optionDesc='Выберите жанр' options={['1', '2', '3']}/>
                </div>
                <div className={styles.filter_item}>
                    <StyledSelect title='Кинотеатр' optionDesc='Выберите кинотеатр' options={['1', '2', '3']}/>
                </div>
            </div>
        </div>
    );
}

export default Filters;