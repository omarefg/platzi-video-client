import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/styles/components/Carousel.module.scss'
import playIcon from '../assets/static/icons8-play-64.png'
import addIcon from '../assets/static/icons8-plus-64.png'

export const CarouselItem = ({ image, alt, title, year, content, duration }) => {
    return (
        <div className={styles['carousel-item']}>
            <img
                className={styles['carousel-item__img']}
                src={image}
                alt={alt}
            />
            <div className={styles['carousel-item__details']}>
                <div>
                    <img src={playIcon} alt='Play'/>
                    <img src={addIcon} alt='Add'/>
                </div>
                <p className={styles['carousel-item__details--title']}>{title}</p>
                <p className={styles['carousel-item__details--subtitle']}>{`${year} ${content} ${duration} minutos`}</p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    content: PropTypes.string,
    duration: PropTypes.number,
}
