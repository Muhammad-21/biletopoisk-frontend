import React from 'react'
import styles from './FAQ.module.css'
import FAQCard from './FAQCard/FAQCard';
import { QuestionsAndAnswers } from './data/questionsAndAnswers';

const FAQ: React.FC = () => {
    return ( 
        <div className={styles.faq_cards}>
            <div className={styles.faqCard__title}>Вопросы-ответы</div>
            {QuestionsAndAnswers.map(qAndA => <FAQCard id={qAndA.id} key={qAndA.id} question={qAndA.question} answer={qAndA.answer}/>)}
        </div>
    )
}
 
export default FAQ;