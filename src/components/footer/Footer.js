import React from "react";

import styles from './Footer.module.css';

import logo from '../../assets/images/logo/logo.png';
import { NavLink } from "react-router-dom";

export const Footer = () => {

    const {
        logoContainer, footer, copy
    } = styles;

    return (
        <footer>
            <NavLink to={'/'}><div className={logoContainer} style={{backgroundImage: `url(${logo})`}}></div></NavLink>
            <div className={footer}>
                <div className={copy}>Дизайн сайта и реклама — <a href="https://github.com/s1ngle2020" target="_blank">Андрей Данейко. Гр. 880972</a></div>
                <p>© Copyright. 2020-2021</p>                
            </div>
        </footer>
    )
}
