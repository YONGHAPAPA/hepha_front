import { createStore, combineReducers } from "redux";
import { counter } from "./counter";

export default (state = 0, action) => {
    //combineReducers(counter);
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};
