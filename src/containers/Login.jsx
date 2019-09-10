import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../assets/styles/containers/Login.module.scss'

import twitter from '../assets/static/icons8-twitter-52.png'
import google from '../assets/static/icons8-google-50.png'

export const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.login__container}>
                <h2>Inicia Sesión</h2>
                <form className={styles['login__container--form']}>
                    <input
                        className={styles.input}
                        type='text'
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
                        type='button'
                        className={styles.button}
                    >
                            Inicia sesión
                    </button>
                    <div className={styles['login__container--remember-me']}>
                        <label htmlFor='cbox1'>
                            <input
                                id='cbox1'
                                type='checkbox'
                                value='checkbox'
                            />
                        Recuérdame
                        </label>
                        <a href='/'>Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className={styles['login__container--social-media']}>
                    <div>
                        <img src={google} alt='google'/>
                        Inicia Sesión con Google
                    </div>
                    <div>
                        <img src={twitter} alt='twitter'/>
                        Inicia Sesión con Twitter
                    </div>
                </section>
                <p className={styles['login__container--register']}>
                    {'No tienes ninguna cuenta '}
                    <Link to='/register'>Regístrate</Link>
                </p>
            </div>
        </section>
    )
}
