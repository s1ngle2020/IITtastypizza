import {v4} from "uuid";

import {pizzaData} from '../data/pizza-data';
import {snacksData} from "../data/snacks-data";
import {dessertData} from "../data/dessert-data";
import {sauceData} from "../data/sauce-data";
import {beverageData} from "../data/beverage-data";

const addId = (item) => {
    item.id = v4();
    return item;
}

const initState = {
    pizza: pizzaData.map(addId),
    snacks: snacksData.map(addId),
    desserts: dessertData.map(addId),
    sauces: sauceData.map(addId),
    beverages: beverageData.map(addId),
}

export const GoodsReducer = (state = initState, action) => {
    switch (action.type) {
        case '0':
            return {
                ...state,
            }
        default:
            return state;
    }
}
