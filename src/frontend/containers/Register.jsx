import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../actions'

import styles from '../assets/styles/containers/Login.module.scss'

const mapDispatchToProps = {
    registerUser,
}

export const Register = connect(null, mapDispatchToProps)(({ history, registerUser }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const setFormHandler = event => setForm({
        ...form,
        [event.target.name]: event.target.value,
    })

    const submitHandler = event => {
        event.preventDefault()
        registerUser(form, () => history.push('/login'))
    }

    return (
        <section className={styles.login}>
            <div className={styles.login__container}>
                <h2>Regístrate</h2>
                <form
                    className={styles['login__container--form']}
                    onSubmit={submitHandler}
                >
                    <input
                        className={styles.input}
                        type='text'
                        placeholder='Nombre'
                        aria-label='Nombre'
                        name='name'
                        onChange={setFormHandler}
                        required
                    />
                    <input
                        className={styles.input}
                        type='email'
                        placeholder='Correo'
                        aria-label='Correo'
                        name='email'
                        onChange={setFormHandler}
                        required
                    />
                    <input
                        className={styles.input}
                        type='password'
                        placeholder='Contraseña'
                        aria-label='Contraseña'
                        name='password'
                        onChange={setFormHandler}
                        required
                    />
                    <button
                        className={styles.button}
                        type='submit'
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
})
