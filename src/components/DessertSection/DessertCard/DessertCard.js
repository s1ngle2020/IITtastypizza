import React from "react";

import styles from './DessertCard.module.css';
import {addGoodsAC, plusToSumAC} from "../../../redux/cart-reducer";
import {useDispatch} from "react-redux";

export const DessertCard = ({data}) => {

    const {id, name, price, weight, description, photo} = data;

    const {zoom, titleContainer, title, cartButton, container, hr} = styles;

    const dispatch = useDispatch();

    const onAddCart = (id, name, price, count = 1, size = '') => {
        dispatch(addGoodsAC({
            id,
            name,
            price,
            count,
            size,
        }));
        dispatch(plusToSumAC(price));
    }

    return (
        <div className={container}>
            <div>
                <i className={zoom}></i>
                <a href=""> <img src={photo} alt={name} title={name}/></a>
            </div>
            <hr className={hr}/>
            <div className={titleContainer}>
                <h3 className={title}>{name}</h3>
            </div>
            <div>
                <p>
                    <span><span className={styles.price}>{price}</span>
                        <button className={cartButton}
                                type={'button'}
                                onClick={() => onAddCart(id, name, price, 1, weight)}
                        >В корзину</button></span>
                    <br/>
                    <span className={styles.weight}>{weight}</span>
                </p>
            </div>
            <div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}
