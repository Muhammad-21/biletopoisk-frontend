import FilmCard from '@/components/Films/FilmCard/FilmCard';
import styles from './page.module.css'
import Cart from '@/components/Cart/Cart';

function CartPage() {
    return ( 
        <div className={styles.cart_wrapper}>
            <Cart/>
        </div>
    );
}

export default CartPage;