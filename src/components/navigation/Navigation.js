import React from "react";

import styles from './Navigation.module.css';
import headerBackground from '../../assets/images/background2.jpg';
import tastyLogo from '../../assets/images/pizzaname.png';
import pizzaLogo from '../../assets/images/logopizza.png';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export const Navigation = () => {
    const {
        backGroundContainer, pzzHeader, logo, nav, contacts, cartContainer, navList, navListItem,
        itemLink, providers, phone, phoneLink, cartSum, cartLink, pizzaLogoContainer, logoImg,
        pizzaLogoImage, mapLink,
    } = styles;

    const sum = useSelector(state => state.carts.sum);

    return (
        <div className={backGroundContainer} style={{
            background: `url(${headerBackground}) 50% 0 #ff5201 repeat`,
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
                <div className={nav}>
                    <ul className={navList}>
                        <li className={navListItem}>
                            <a href="#pizzas" data-forward="pizzas" className={itemLink}>пиццы</a>
                        </li>
                        <li className={navListItem}>
                            <a href="#snacks" data-forward="snacks" className={itemLink}>закуски</a>
                        </li>
                        <li className={navListItem}>
                            <a href="#sauces" data-forward="sauces" className={itemLink}>соусы</a>
                        </li>
                        <li className={navListItem}>
                            <a href="#drinks" data-forward="drinks" className={itemLink}>напитки</a>
                        </li>
                    </ul>
                </div>
                <div className={contacts}>
                    <p className={providers}>a1 мтс лайф</p>
                    <p className={phone}><a href="tel:+375297556655" className={phoneLink}>111-11-11</a></p>
                    <p className={mapLink}>
                        <NavLink to={'/map'}> карта сайта </NavLink>
                    </p>
                </div>
                <div className={cartContainer}>
                    <p className={cartSum}>{sum ? +parseFloat(sum).toFixed(2) : '0,00'}</p>
                    <p className={cartLink}>
                        <NavLink to={'/cart'}> корзина </NavLink>
                    </p>
                    <p className={cartLink}>
                        <NavLink to={'/deliveryInfo'}> доставка </NavLink>
                    </p>
                </div>
                <div className={pizzaLogoContainer}>
                    <img src={pizzaLogo} alt="" className={pizzaLogoImage}/>
                </div>
            </div>
        </div>
    )
}
