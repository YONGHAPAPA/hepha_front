import { VisibleFilters } from "../actions";

const visibleFilter = (state = VisibleFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case "SET_VISIBLE_FILTER":
            return action.filter;
        default:
            return state;
    }
};

export default visibleFilter;
