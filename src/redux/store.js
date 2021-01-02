import {combineReducers, createStore} from 'redux';
import {GoodsReducer} from "./goods-reducer";
import {CartsReducer} from "./cart-reducer";


const rootReducer = combineReducers({
    goods: GoodsReducer,
    carts: CartsReducer,
});

export const store = createStore(rootReducer);

window.store = store;
