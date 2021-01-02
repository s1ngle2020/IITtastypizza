import React from "react";

import styles from './CartHeader.module.css';
import tastyLogo from '../../assets/images/pizzaname.png';
import headerLogo from '../../assets/images/background2.jpg';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import pizzaLogo from "../../assets/images/logopizza.png";

export const CartHeader = () => {
    const {
        backGroundContainer, pzzHeader, logo, contacts, cartContainer,
        providers, phone, phoneLink, cartSum, cartLink, address, logoImg,
        pizzaLogoContainer, pizzaLogoImage,
    } = styles;

    const sum = useSelector(state => state.carts.sum);

    return (
        <div className={backGroundContainer} style={{
            background: `url(${headerLogo}) 50% 0 #ff5201 repeat`,
            minHeight: '101px',
            position: "fixed",
            width: '100vw',
            zIndex: '1002',
        }}>
            <div className={pzzHeader}>
                <div className={logo}>
                    <NavLink to={'/'}>
                        <img src={tastyLogo} alt="logo" className={logoImg}/>
                    </NavLink>
                </div>
                <div className={contacts}>
                    <p className={providers}>a1 мтс лайф</p>
                    <p className={phone}><a href="tel:+375297556655" className={phoneLink}>111-11-11</a></p>
                </div>
                <div className={cartContainer}>
                    <p className={cartSum}>{sum ? +parseFloat(sum).toFixed(2) : '0,00'}</p>
                    <p className={cartLink}>
                        <NavLink to={'/cart'}> корзина </NavLink>
                    </p>
                </div>
                <div className={pizzaLogoContainer}>
                    <img src={pizzaLogo} alt="" className={pizzaLogoImage}/>
                </div>
            </div>
        </div>
    )
}
