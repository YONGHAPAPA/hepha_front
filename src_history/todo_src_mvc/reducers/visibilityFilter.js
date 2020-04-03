import { SET_VISIBLE_FILTER } from "../constants/ActionTypes";
import { SHOW_ALL } from "../constants/TodoFilters";

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBLE_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;
