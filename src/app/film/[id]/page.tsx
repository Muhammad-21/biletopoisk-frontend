'use client'

import styles from './page.module.css'
import FilmDetail from '@/components/Films/FilmDetail/FilmDetail';

function FilmPage() {
    return (  
        <div className={styles.film_wrapper}>
            <FilmDetail />
            {/* <FilmReviews /> */}
        </div>
    );
}

export default FilmPage;