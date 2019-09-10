import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../assets/styles/components/Header.module.scss'

import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/icons8-usuario-masculino-en-círculo-50-white.png'

export const Header = props => {
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
                    <img
                        src={userIcon}
                        alt='profile'
                    />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href='/'>Cuenta</a></li>
                    <li><Link to='/login'>Iniciar Sesión</Link></li>
                </ul>
            </div>
        </header>
    )
}

