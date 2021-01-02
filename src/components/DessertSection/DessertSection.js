import React from "react";

import styles from './DessertSection.module.css';

import {DessertCard} from "./DessertCard/DessertCard";
import {useSelector} from "react-redux";


export const DessertSection = () => {
    const {pizzaList, pizzaListItem, container, sectionTitle} = styles;
    const desserts = useSelector(state => state.goods.desserts);

    return (
        <section id={'desserts'}>
            <div className={container}>
                <h2 className={sectionTitle}>Десерты</h2>
                <ul className={pizzaList}>
                    {
                        desserts.map(item => <li className={pizzaListItem} key={item.id}><DessertCard data={item}/></li>)
                    }
                </ul>
            </div>
        </section>
    )
}
