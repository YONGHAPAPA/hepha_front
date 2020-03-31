import * as types from "../constants/ActionTypes";

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
});

export const completeTodo = id => ({
    type: types.COMPLETE_TODO,
    id: id
});

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    id: id
});

export const editTodo = (id, text) => ({
    type: types.EDIT_TODO,
    id: id,
    text: text
});

export const completeAllTodos = () => ({
    type: types.COMPLETE_ALL_TODO
});

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBLE_FILTER,
    filter
});

export const clearCompleted = () => ({
    type: types.CLEAR_COMPLETED
});
