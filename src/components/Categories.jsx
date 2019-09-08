import React from 'react'
import styles from '../assets/styles/components/Categories.module.scss'

export const Categories = ({ children }) => {
    return (
        <div className={styles.categories}>
            <h2 className={styles.categories__title}>
                Mi lista
            </h2>
            {children}
        </div>
    )
}

