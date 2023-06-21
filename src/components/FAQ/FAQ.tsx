import React from 'react'
import styles from './FAQ.module.css'
import FAQCard from '../FAQCard/FAQCard';

const FAQ: React.FC = () => {
    return ( 
        <div className={styles.faq_wrapper}>
            <FAQCard/>
        </div>
    )
}
 
export default FAQ;