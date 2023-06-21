'use client'

import { useRouter } from 'next/navigation';
import styles from './Footer.module.css'
import { changeRoute } from '@/utils/router';

function Footer() {
    const router = useRouter()

    return ( 
        <div className={styles.footer_wrapper}>
            <div className={styles.footer_elem} onClick={() => changeRoute('/faq', router)}>Вопросы-ответы</div>
            <div className={styles.footer_elem} onClick={() =>changeRoute('/about-us', router)}>О нас</div>
        </div>
    );
}

export default Footer;