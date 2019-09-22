import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { setFavorite, deleteFavorite } from '../actions'

import styles from '../assets/styles/components/Carousel.module.scss'
import playIcon from '../assets/static/icons8-play-64.png'
import addIcon from '../assets/static/icons8-plus-64.png'
import trashIcon from '../assets/static/remove-icon.png'

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export const CarouselItem = connect(null, mapDispatchToProps)(props => {
    const {
        cover,
        title,
        year,
        contentRating,
        duration,
        setFavorite,
        id,
        deleteFavorite,
        showAdd,
        showDelete,
        showPlay,
    } = props

    const handleSetFavorite = () => setFavorite({
        cover,
        title,
        year,
        contentRating,
        duration,
        id,
    })

    const handleDeleteFavorite = () => deleteFavorite(id)

    return (
        <div className={styles['carousel-item']}>
            <img
                className={styles['carousel-item__img']}
                src={cover}
                alt={title}
            />
            <div className={styles['carousel-item__details']}>
                <div>
                    {showPlay && (
                        <Link to={`/player/${id}`}>
                            <img
                                src={playIcon}
                                alt='Play'
                            />
                        </Link>
                    )}
                    {showAdd && (
                        <img
                            src={addIcon}
                            alt='Add'
                            onClick={handleSetFavorite}
                        />
                    )}
                    {showDelete && (
                        <img
                            src={trashIcon}
                            alt='Delete'
                            onClick={handleDeleteFavorite}
                        />
                    )}
                </div>
                <p className={styles['carousel-item__details--title']}>{title}</p>
                <p className={styles['carousel-item__details--subtitle']}>{`${year} ${contentRating} ${duration} minutos`}</p>
            </div>
        </div>
    )
})

CarouselItem.propTypes = {
    cover: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}
