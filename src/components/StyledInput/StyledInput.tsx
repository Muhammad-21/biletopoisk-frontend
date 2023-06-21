import styles from './StyledInput.module.css'

function StyledInput() {
    return ( 
        <label>
            <div className={styles.input_title}>Название</div>
            <input 
                type="text"
                placeholder="Введите название"
                className={styles.input}
            />
        </label>
    );
}

export default StyledInput;