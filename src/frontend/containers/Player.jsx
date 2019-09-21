import React from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'

import styles from '../assets/styles/containers/Player.module.scss'

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export const Player = connect(mapStateToProps, mapDispatchToProps)(props => {
    const { type, history, match, playing, getVideoSource } = props
    const { id } = match.params
    getVideoSource(id)

    return (
        <div className={styles.player}>
            <video
                controls
                // autoPlay
            >
                <source
                    src={playing.source}
                    type={type || 'video/mp4'}
                />
            </video>
            <div className={styles['player__back-button']}>
                <button
                    type='button'
                    onClick={() => history.goBack()}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
})
