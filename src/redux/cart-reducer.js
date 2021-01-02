const ADD_GOODS = 'ADD_GOODS';
const REMOVE_GOODS = 'REMOVE_GOODS';
const PLUS_TO_SUM = 'PLUS_TO_SUM';
const MINUS_TO_SUM = 'MINUS_TO_SUM';
const PLUS_TO_COUNT = 'PLUS_TO_COUNT';
const MINUS_TO_COUNT = 'MINUS_TO_COUNT';
const CLEAR_CART = 'CLEAR_CART';
const APPLY_PROMO = 'APPLY_PROMO';

const initState = {
    goods: [],
    sum: 0,
}

export const CartsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_GOODS: {
            const goodId = action.payload.id;
            if (state.goods.find(item => item.id === goodId && item.price === action.payload.price)) {
                const newItem = state.goods.find(item => item.id === goodId);
                newItem.count += 1;
                const oldIndex = state.goods.findIndex(item => item.id === goodId);
                const newGoods = state.goods.slice(0, oldIndex).concat(newItem, state.goods.slice(oldIndex + 1));
                return {
                    ...state,
                    goods: [...newGoods],
                }
            } else {
                return {
                    ...state,
                    goods: [...state.goods, action.payload],
                }
            }
        }
        case REMOVE_GOODS: {
            const removeIndex = state.goods.findIndex(item => item.id === action.id && item.price === action.price);
            const newGoods = state.goods.slice(0, removeIndex).concat(state.goods.slice(removeIndex + 1));
            return {
                ...state,
                goods: [...newGoods],
            }
        }
        case PLUS_TO_SUM:
            return {
                ...state,
                sum: state.sum + action.price,
            }
        case MINUS_TO_SUM:
            return {
                ...state,
                sum: state.sum - action.price,
            }
        case PLUS_TO_COUNT: {
            const newItem = state.goods.find(item => item.id === action.id && item.price === action.price);
            newItem.count += 1;
            const oldIndex = state.goods.findIndex(item => item.id === action.id && item.price === action.price);
            const newGoods = state.goods.slice(0, oldIndex).concat(newItem, state.goods.slice(oldIndex + 1));
            return {
                ...state,
                goods: [...newGoods],
            }
        }
        case MINUS_TO_COUNT: {
            const newItem = state.goods.find(item => item.id === action.id && item.price === action.price);
            newItem.count -= 1;
            if (newItem.count < 1) {
                const removeIndex = state.goods.findIndex(item => item.id === action.id && item.price === action.price);
                const newGoods = state.goods.slice(0, removeIndex).concat(state.goods.slice(removeIndex + 1));
                return {
                    ...state,
                    goods: [...newGoods],
                }
            }
            const oldIndex = state.goods.findIndex(item => item.id === action.id && item.price === action.price);
            const newGoods = state.goods.slice(0, oldIndex).concat(newItem, state.goods.slice(oldIndex + 1));
            return {
                ...state,
                goods: [...newGoods],
            }
        }
        case CLEAR_CART:
            return {
                ...state,
                goods: [],
                sum: 0,
            }
        case APPLY_PROMO: {
            return {
                ...state,
                sum: state.sum * 0.9,
            }
        }
        default:
            return state;
    }
}

export const addGoodsAC = (payload) => ({type: ADD_GOODS, payload});
export const removeGoodsAC = (id, price) => ({type: ADD_GOODS, id, price});
export const plusToSumAC = (price) => ({type: PLUS_TO_SUM, price});
export const minusToSumAC = (price) => ({type: MINUS_TO_SUM, price});
export const plusToCountAC = (id, price) => ({type: PLUS_TO_COUNT, id, price});
export const minusToCountAC = (id, price) => ({type: MINUS_TO_COUNT, id, price});
export const clearCartAC = () => ({type: CLEAR_CART});
export const setPromoAC = () => ({type: APPLY_PROMO});


