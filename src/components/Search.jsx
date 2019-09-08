import React from 'react'
import styles from '../assets/styles/components/Search.module.scss'

export const Search = props => {
    return (
        <section className={styles.main}>
            <h2 className={styles.main__title}>
                ¿Qué quieres ver hoy?
            </h2>
            <input
                className={styles.input}
                type='text'
                placeholder='Buscar...'
            />
        </section>
    )
}
