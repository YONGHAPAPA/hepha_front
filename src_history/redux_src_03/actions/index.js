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

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};
