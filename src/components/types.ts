export type Routes = '/about-us' | '/cart' | '/faq' | '/' | `/film/${string}`

export interface FAQCardProps {
    id: string;
    question: string;
    answer: string;
}

export interface CinemaAttributes {
    id: string,
    name: string,
    movieIds: string[],
}

export interface FilmAttributes {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: string,
    id: string,
    rating: number,
    director: string,
    reviewIds: string[],
}

export interface ReviewAttributes {
    id: string;
    name: string;
    text: string;
    rating: string;
}

export interface SelectOption {
    name: string; 
    id: string; 
}