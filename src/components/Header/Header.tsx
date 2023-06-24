'use client'

import Image from 'next/image';
import styles from './Header.module.css'
import CartIcon from './assets/Cart.svg'
import { usePathname, useRouter } from 'next/navigation';
import { changeRoute } from '@/utils/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalItemCount } from '@/redux/slices/cart/selector';

function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const count = useSelector(selectTotalItemCount)

    return ( 
        <div className={styles.header_wrapper}>
            <h1 className={styles.herder_title} onClick={() => changeRoute('/', router, pathname)}>Билетопоиск</h1>
            <div className={styles.header_cart}>
                <div className={styles.header_cart__count__wrap}>
                    <div className={styles.header_cart__count__title}>{count}</div>
                </div>
                <Image
                    src={CartIcon} 
                    alt="Корзина"
                    className={styles.header_cart__icon}
                    onClick={() => changeRoute('/cart', router, pathname)}
                />
            </div>
        </div>
    );
}

export default Header;