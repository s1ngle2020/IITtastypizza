import React from "react";

import styles from './SnacksSection.module.css';

import {SnackCard} from "./SnackCard/SnackCard";
import {useSelector} from "react-redux";


export const SnacksSection = () => {
    const {pizzaList, pizzaListItem, container, sectionTitle} = styles;
    const snacks = useSelector(state => state.goods.snacks);

    return (
        <section id={'snacks'}>
            <div className={container}>
                <h2 className={sectionTitle}>Закуски</h2>
                <ul className={pizzaList}>
                    {
                        snacks.map(item => <li className={pizzaListItem} key={item.id}><SnackCard data={item}/></li>)
                    }
                </ul>
            </div>
        </section>
    )
}
