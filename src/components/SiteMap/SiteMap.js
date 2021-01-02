import React from "react";
import { NavLink } from "react-router-dom";
import {Footer} from "../footer/Footer";

import styles from "./SiteMap.module.css";

import pizzas from '../../assets/images/headerMainPhotos.png';

export const SiteMap = () => {

    const {linkList, linkListContainer, listItem, imgContainer, img} = styles;

    return (
        <>
        <div className={linkListContainer}>
        <ul className={linkList}> 
            <li className={listItem}> <NavLink to={'/'}>Главная</NavLink></li>
            <li className={listItem}> <NavLink to={'/cart'}>Корзина</NavLink></li>
            <li className={listItem}> <NavLink to={'/deliveryInfo'}>Информация о доставке</NavLink></li>
            <li className={listItem}> <NavLink to={'/map'}>Карта сайта</NavLink></li>
            <li className={listItem}> <NavLink to={'/about'}>О нас</NavLink></li>
            </ul>
            <div className={imgContainer}>
                    <img src={pizzas} alt="pizza image" className={img}/>
                </div>
            </div>
            <Footer />
         </>
    )
}