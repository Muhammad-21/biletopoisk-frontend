import Image from 'next/image';
import styles from './FilmCard.module.css'
import MinusIcon from './assets/Minus.svg'
import PlusIcon from './assets/Plus.svg'

function FilmCard() {
    return ( 
        <div className={styles.filmCard_wrapper}>
            <div className={styles.filmCard_promo__info}>
                <Image
                    src='https://i.postimg.cc/pdCLNMqX/1.webp'
                    alt='обложка'
                    width={100}
                    height={120}
                />
                <div>
                    <div className={styles.filmCard_promo__title}>Властелин колец: Братство кольца</div>
                    <div className={styles.filmCard_promo__subtitle}>Фэнтези</div>
                </div>
            </div>
            <div className={styles.filmCard_counter}>
                <div className={styles.filmCard_button_disabled && styles.filmCard_button_active}>
                    <Image
                        src={MinusIcon}
                        alt='Minus Icon'
                    />
                </div>
                <div className={styles.filmCard_counter__num}>
                    0
                </div>
                <div className={styles.filmCard_button_disabled}>
                    <Image
                        src={PlusIcon}
                        alt='Plus Icon'
                    />
                </div>
            </div>
        </div>
    );
}

export default FilmCard;