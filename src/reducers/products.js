import { combineReducers } from "redux";
import {
    RECEIVE_PRODUCTS,
    ADD_TO_CART
} from "../constants/ActionTypes";

const products = (product_state, action) => {
    //console.log(`reducer products >> ${action.type}`);
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...product_state,
                inventory: product_state.inventory - 1
            };
        default:
            return product_state;
    }
};

const byId = (state = {}, action) => {
    //console.log(`action.type: ${action.type}`);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {})
            };
        default:
            const { productId } = action;
            if (productId) {
                return {
                    ...state,
                    [productId]: products(state[productId], action)
                };
            }
            return state;
    }
};

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id);
        default:
            return state;
    }
};

export default combineReducers({ byId, visibleIds });

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id));
