import FilmCard from '@/components/Films/FilmCard/FilmCard';
import styles from './page.module.css'

function CardPage() {
    return ( 
        <div className={styles.cart_wrapper}>
            <div className={styles.films_wrapper}>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
            </div>
            <div className={styles.cart_ticket}>
                <div className={styles.cart_ticket__title_count}>Итого билетов:</div>
                <div className={styles.cart_ticket__title_count}>7</div>
            </div>
        </div>
    );
}

export default CardPage;