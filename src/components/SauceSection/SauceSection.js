import React from "react";

import styles from './SauceSection.module.css';

import {SauceCard} from "./SauceCard/SauceCard";
import {useSelector} from "react-redux";


export const SauceSection = () => {
    const {pizzaList, pizzaListItem, container, sectionTitle} = styles;
    const sauces = useSelector(state => state.goods.sauces);

    return (
        <section>
            <div className={container} id={'sauces'}>
                <h2 className={sectionTitle}>Соусы</h2>
                <ul className={pizzaList}>
                    {
                        sauces.map(item => <li className={pizzaListItem} key={item.id}><SauceCard data={item}/></li>)
                    }
                </ul>
            </div>
        </section>
    )
}
