"use client"

import Image from 'next/image'
import styles from './FAQCard.module.css'
import OpenIcon from './assets/OpenIcon.svg'
import CloseIcon from './assets/CloseIcon.svg'
import React from 'react'
import { FAQCardProps } from '../../types'

const FAQCard: React.FC<FAQCardProps> = ({ question, answer}) => {

    const [opened, setOpened] = React.useState<boolean>(false)

    const changeView = React.useCallback(() => {
        setOpened(prev => !prev)
    },[])

    return ( 
        <div className={styles.faqCard__wrapper} onClick={changeView}>
            <div className={styles.faqCard_question__wrap}>
                <div className={styles.faqCard_question}>{question}</div>
                <Image
                    src={opened ? CloseIcon : OpenIcon}
                    alt='icon'
                />
            </div>
            {
                opened && <div className={styles.faqCard_answer}>{answer}</div>
            }
        </div>
    )
}

export default FAQCard