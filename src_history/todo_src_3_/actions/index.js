let todoId = 0;

export const addTodo = text => ({
    type: "ADD_TODO",
    id: todoId++,
    text: text
});

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id: id
});

export const setFilter = filter => ({
    type: "SET_FILTER",
    filter
});

export const Filters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};
