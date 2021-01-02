import React from "react";

import styles from './CartListItem.module.css';
import {useDispatch, useSelector} from "react-redux";
import {minusToCountAC, minusToSumAC, plusToCountAC, plusToSumAC, removeGoodsAC} from "../../../redux/cart-reducer";

export const CartListItem = ({data}) => {
    const {container, goodTitle, sizeCn, price: priceCn, minus, plus, buttons, goodsInfo} = styles;
    const {id, name, price, count, size} = data;

    const dispatch = useDispatch();

    const onHandlePlus = (price, id) => {
        dispatch(plusToSumAC(price));
        dispatch(plusToCountAC(id, price));
    }

    const onHandleMinus = (price, id) => {
        dispatch(minusToSumAC(price));
        dispatch(minusToCountAC(id, price));
    }

    return (
        <div className={container}>
            <p className={goodsInfo}>
                <span className={goodTitle}>{name}</span> <br/>
                <span className={sizeCn}>{size}</span>
            </p>
            <p className={buttons}>
                    <span className={minus}
                          onClick={() => onHandleMinus(price, id)}
                    >-</span>
                <span>{count}</span>
                <span className={plus}
                      onClick={() => onHandlePlus(price, id)}
                >+</span>
            </p>
            <p className={priceCn}>
                {parseFloat((price * count).toFixed(2))}
            </p>
        </div>
    )
}
