import React from "react";

import styles from './BeverageSection.module.css';

import {BeverageCard} from "./BeverageCard/BeverageCard";
import {useSelector} from "react-redux";


export const BeverageSection = () => {
    const {pizzaList, pizzaListItem, container, sectionTitle} = styles;
    const beverages = useSelector(state => state.goods.beverages);

    return (
        <section id={'drinks'}>
            <div className={container}>
                <h2 className={sectionTitle}>Напитки</h2>
                <ul className={pizzaList}>
                    {
                        beverages.map(item => <li className={pizzaListItem} key={item.id}><BeverageCard data={item}/></li>)
                    }
                </ul>
            </div>
        </section>
    )
}
