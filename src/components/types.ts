export type Routes = '/about-us' | '/cart' | '/faq' | '/' | `/film/${string}`

export interface FAQCardProps {
    id: string;
    question: string;
    answer: string;
}