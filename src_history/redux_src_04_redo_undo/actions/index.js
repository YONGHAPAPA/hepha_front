import cuid from "cuid";

export const addTodo = text => ({
    type: "ADD_TODO",
    id: cuid(),
    text: text
});

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id: id
});

export const VisibleFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_COMPLETED: "SHOW_COMPLETED"
};

export const setFilter = filter => ({
    type: "SET_VISIBLE_FILTER",
    filter
});
