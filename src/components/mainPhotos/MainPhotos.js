import React from "react";

import styles from './MainPhotos.module.css';

import pizzas from '../../assets/images/headerMainPhotos.png';

export const MainPhotos = () => {
    const {container, imgContainer, img} = styles;
    return (
        <div>
            <div className={container}>
                <div className={imgContainer}>
                    <img src={pizzas} alt="pizza image" className={img}/>
                </div>
            </div>
        </div>
    )
}
