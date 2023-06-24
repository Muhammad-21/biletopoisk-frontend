'use client'

import { useEffect, useState } from 'react';
import styles from './Reviews.module.css'
import { getFilmReviews } from '@/api/CinemasService';
import { ReviewAttributes } from '@/components/types';
import ReviewCard from './ReviewCard/ReviewCard';

interface ReviewsProps {
    filmId: string;
}

const Reviews: React.FC<ReviewsProps> = ({ filmId }) => {
    const [reviews, setReviews] = useState<ReviewAttributes[]>([]);

    useEffect(() => {
        getFilmReviews(filmId).then(data => setReviews(data))
    }, [filmId])

    return <div className={styles.reviews_wrapper}>
        {reviews.map(review => <ReviewCard key={review.id} review={review} />)}
    </div>   
}

export default Reviews