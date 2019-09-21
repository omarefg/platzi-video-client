import React from 'react'
import styles from '../assets/styles/components/Footer.module.scss'

export const Footer = props => {
    return (
        <footer className={styles.footer}>
            <a href='/'>Términos de uso</a>
            <a href='/'>Declaración de privacidad</a>
            <a href='/'>Centro de ayuda</a>
        </footer>
    )
}
