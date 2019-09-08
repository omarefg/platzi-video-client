import React from 'react'
import styles from '../assets/styles/components/Carousel.module.scss'

export const Carousel = ({ children }) => {

    return (
        <section className={styles.carousel}>
            <div className={styles.carousel__container}>
                {children}
            </div>
        </section>
    )
}
