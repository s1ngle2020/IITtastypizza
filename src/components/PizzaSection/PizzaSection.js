import React from "react";

import styles from './PizzaSection.module.css';

import {PizzaCard} from "./PizzaCard/PizzaCard";
import {useDispatch, useSelector} from "react-redux";

export const PizzaSection = () => {
    const {pizzaList, pizzaListItem, container, sectionTitle} = styles;
    const pizzas = useSelector(state => state.goods.pizza);

    return (
        <section id={'pizzas'}>
            <div className={container}>
                <h2 className={sectionTitle}>Пиццы</h2>
                <ul className={pizzaList}>
                    {
                        pizzas.map(item => <li className={pizzaListItem} key={item.id}><PizzaCard data={item}/></li>)
                    }
                </ul>
            </div>
        </section>
    )
}
