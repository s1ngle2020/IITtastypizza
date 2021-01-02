import React from "react";

import styles from './CartSection.module.css';
import {CartListItem} from "./CartListItem/CartListItem";
import {useSelector} from "react-redux";

export const CartSection = () => {

    const {container, totalContainer, totalTitle, section,
        goodsList, goodsListItem, sectionTitle,
        orderTitle, totalSum, checkoutContainer,
        checkout} = styles;

    const goods = useSelector(state => state.carts.goods);
    const sum = useSelector(state => state.carts.sum);
    console.log(goods);

    return (
        <section className={section}>
            <div className={container}>
                <h1 className={sectionTitle}>Оформление заказа</h1>
                <h2 className={orderTitle}>Ваш заказ</h2>
                {
                    !goods.length ? <div>корзина пуста</div> :
                        <ul className={goodsList}>
                            {
                                goods.map(item => <li className={goodsListItem}><CartListItem data={item}/></li>)
                            }
                        </ul>
                }
                <p className={totalContainer}>
                    <span className={totalTitle}>
                        Итого: <span className={totalSum}>{+parseFloat(sum).toFixed(2)}</span>
                    </span>
                </p>
                <p className={checkoutContainer}>
                    <span className={checkout}><a href="#clientInfo">Оформить</a></span>
                </p>
            </div>
        </section>
    )
}
