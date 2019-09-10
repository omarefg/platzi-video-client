import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../assets/styles/containers/Login.module.scss'

export const Register = props => {
    return (
        <section className={styles.login}>
            <div className={styles.login__container}>
                <h2>Regístrate</h2>
                <form className={styles['login__container--form']}>
                    <input
                        className={styles.input}
                        type='text'
                        placeholder='Nombre'
                        aria-label='Nombre'
                    />
                    <input
                        className={styles.input}
                        type='email'
                        placeholder='Correo'
                        aria-label='Correo'
                    />
                    <input
                        className={styles.input}
                        type='password'
                        placeholder='Contraseña'
                        aria-label='Contraseña'
                    />
                    <button
                        className={styles.button}
                        type='button'
                    >
                        Regístrate
                    </button>
                </form>
                <p className={styles['login__container--register']}>
                    {'Ya tienes cuenta '}
                    <Link to='/login'>Inicia sesión</Link>
                </p>
            </div>
        </section>
    )
}
