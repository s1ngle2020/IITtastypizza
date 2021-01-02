import React from "react";

import styles from './BeverageCard.module.css';
import cartIco from '../../../assets/fonts/ico-cart.svg';
import {addGoodsAC, plusToSumAC} from "../../../redux/cart-reducer";
import {useDispatch} from "react-redux";

export const BeverageCard = ({data}) => {

    const {id, name, price, volume, photo} = data;

    const {zoom, titleContainer, title, txt, cartButton, container, hr, ico, cardAndPrice, description} = styles;

    const dispatch = useDispatch();

    const onAddCart = (id, name, price, count= 1, size='') => {
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
            <div className={titleContainer}>
                <h3 className={title}>{name}</h3>
            </div>
            <div>
                <p className={cardAndPrice}>
                    <span className={description}>{volume}</span>
                    <span className={styles.price}>{price}</span>
                    <button className={cartButton}
                            type={'button'}
                            onClick={() => onAddCart(id, name, price, 1, volume)}
                    >
                        <span className={txt}>В корзину</span>
                        <span className={ico} style={{background: `url(${cartIco})`}}></span>
                    </button>
                </p>
            </div>
        </div>
    )
}
