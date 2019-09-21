import React from 'react'
import { connect } from 'react-redux'
import { filterVideos } from '../actions'

import styles from '../assets/styles/components/Search.module.scss'

const mapDispatchToProps = {
    filterVideos,
}

export const Search = connect(null, mapDispatchToProps)(({ filterVideos }) => {

    const filterVideosHandler = event => filterVideos(event.target.value)

    return (
        <section className={styles.main}>
            <h2 className={styles.main__title}>
                ¿Qué quieres ver hoy?
            </h2>
            <input
                className={styles.input}
                type='text'
                placeholder='Buscar...'
                onChange={filterVideosHandler}
            />
        </section>
    )
})
