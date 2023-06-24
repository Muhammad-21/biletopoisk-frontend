'use client'

import { useSelector } from 'react-redux';
import styles from './Cart.module.css'
import { selectTotalItemCount } from '@/redux/slices/cart/selector';
import { RootState } from '@/redux/store';
import FilmCard from '../Films/FilmCard/FilmCard';

function Cart() {
    const ticketCount = useSelector(selectTotalItemCount)
    const films = useSelector((state: RootState) => Object.keys(state.cart))

    return ( 
        <div className={styles.cart_wrapper}>
            <div className={styles.films_wrapper}>
                {films.map(film => <FilmCard key={film} film={JSON.parse(film)}/>)}
            </div>
            <div className={styles.cart_ticket}>
                <div className={styles.cart_ticket__title_count}>Итого билетов:</div>
                <div className={styles.cart_ticket__title_count}>{ticketCount}</div>
            </div>
        </div>
    );
}

export default Cart;