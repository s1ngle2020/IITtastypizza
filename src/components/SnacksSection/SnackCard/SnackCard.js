import React from "react";

import styles from './SnackCard.module.css';
import {addGoodsAC, plusToSumAC} from "../../../redux/cart-reducer";
import {useDispatch} from "react-redux";

export const SnackCard = ({data}) => {

    const {id, name, bigPrice, bigWeight, smallPrice, smallWeight, description, photo} = data;

    const {zoom, titleContainer, title, size, weight, price, cartButton, container, hr} = styles;

    const dispatch = useDispatch();

    const onAddCart = (id, name, price, count = 1, size='') => {
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
                <a href="pizza"> <img src={photo} alt={name} title={name}/></a>
            </div>
            <div className={titleContainer}>
                <h3 className={title}>{name}</h3>
            </div>
            <div>
                <p>
                    <span className={size}>Большая</span> <br/>
                    <span><span className={price}>{bigPrice}</span>
                        <button className={cartButton}
                                type={'button'}
                                onClick={() => onAddCart(id, name, bigPrice, 1, bigWeight)}
                        >В корзину</button></span>
                    <br/>
                    <span className={weight}>{bigWeight}</span>
                </p>
                <p>
                    <span className={size}>Стандартная</span> <br/>
                    <span><span className={price}>{smallPrice}</span>
                        <button className={cartButton}
                                type={'button'}
                                onClick={() => onAddCart(id, name, smallPrice, 1, smallWeight)}
                        >В корзину</button></span>
                    <br/>
                    <span className={weight}>{smallWeight}</span>
                </p>
            </div>
            <div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}
