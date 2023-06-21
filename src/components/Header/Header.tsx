'use client'

import Image from 'next/image';
import styles from './Header.module.css'
import CartIcon from './assets/Cart.svg'
import { useRouter } from 'next/navigation';
import { changeRoute } from '@/utils/router';

function Header() {
    const router = useRouter()

    return ( 
        <div className={styles.header_wrapper}>
            <h1 className={styles.herder_title} onClick={() => changeRoute('/', router)}>Билетопоиск</h1>
            <div className={styles.header_cart}>
                <div className={styles.header_cart__count__wrap}>
                    <div className={styles.header_cart__count__title}>30</div>
                </div>
                <Image
                    src={CartIcon} 
                    alt="Корзина"
                    className={styles.header_cart__icon}
                />
            </div>
        </div>
    );
}

export default Header;