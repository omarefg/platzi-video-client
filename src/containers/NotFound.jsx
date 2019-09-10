import React from 'react'
import styles from '../assets/styles/containers/NotFound.module.scss'

export const NotFound = props => {
    return (
        <section className={styles['not-found__container']}>
            <h1>404</h1>
            <h4>Página no encontrada</h4>
        </section>
    )
}
