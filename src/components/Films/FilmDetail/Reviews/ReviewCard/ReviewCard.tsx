'use client'

import styles from './ReviewCard.module.css'
import { ReviewAttributes } from '@/components/types';
import Image from 'next/image';

interface ReviewCardProps {
    review: ReviewAttributes;
}

const Reviews: React.FC<ReviewCardProps> = ({ review }) => {
    return <div className={styles.review_card}>
        <div className={styles.review_card__image}>
            <Image src={''} width={100} height={100} alt='reviewImage'/>
        </div>
        <div className={styles.review_card__info}>
            <div className={styles.review_card__info__header}>
                <div style={{ fontWeight: '600' }}>{review.name}</div>
                <div>Оценка: <span style={{ fontWeight: '600' }}>{review.rating}</span></div>
            </div>
            <div>{review.text}</div>
        </div>
    </div>   
}

export default Reviews