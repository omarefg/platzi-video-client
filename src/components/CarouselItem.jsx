import React from 'react'
import styles from '../assets/styles/components/Carousel.module.scss'

export const CarouselItem = ({ image, alt }) => {
    return (
        <div className={styles['carousel-item']}>
            <img
                className={styles['carousel-item__img']}
                src={image}
                alt={alt}
            />
            <div className={styles['carousel-item__details']}>
                <div>
                    <img src='./assets/icons8-play-64.png' alt='Play'/>
                    <img src='./assets/icons8-plus-64.png' alt='Add'/>
                </div>
                <p className={styles['carousel-item__details--title']}>Título Descriptivo</p>
                <p className={styles['carousel-item__details--subtitle']}>2019 16+ 114 minutos</p>
            </div>
        </div>
    )
}
