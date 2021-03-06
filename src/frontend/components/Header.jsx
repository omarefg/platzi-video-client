import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { gravatar } from '../utils'
import { logoutRequest } from '../actions'

import styles from '../assets/styles/components/Header.module.scss'

import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/icons8-usuario-masculino-en-círculo-50-white.png'

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(({ history, user, logoutRequest }) => {

    const hasUser = Object.keys(user).length

    const logoutHandler = () => {
        document.cookie = 'email='
        document.cookie = 'name='
        document.cookie = 'id='
        document.cookie = 'token='
        logoutRequest({})
    }

    return (
        <header className={styles.header}>
            <Link to='/'>
                <img
                    className={styles.header__img}
                    src={logo}
                    alt='Logo'
                />
            </Link>
            <div className={styles.header__menu}>
                <div className={styles['header__menu--profile']}>
                    {hasUser ? (
                        <img
                            className={styles['header__menu--profile--img']}
                            src={gravatar(user.email)}
                            alt='profile'
                        />
                    ) : (
                        <img
                            src={userIcon}
                            alt='profile'
                        />
                    )}
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ? <li><a href='/'>{user.name}</a></li> : null}
                    {hasUser ? (
                        <li>
                            <a
                                href='/login'
                                onClick={logoutHandler}
                            >
                                Cerrar Sesión
                            </a>
                        </li>
                    ) :
                        <li><Link to='/login'>Iniciar Sesión</Link></li>}
                </ul>
            </div>
        </header>
    )
})

Header.propTypes = {
    user: PropTypes.object.isRequired,
}

Header.defaultProps = {
    user: {},
}
