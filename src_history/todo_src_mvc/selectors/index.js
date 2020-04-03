import { createSelector } from "reselect";
import {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
} from "../constants/TodoFilters";

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibleFilter, todos) => {
        switch (visibleFilter) {
            case SHOW_ALL:
                return todos;
            case SHOW_COMPLETED:
                return todos.filter(todo => todo.completed);
            case SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed);
            default:
                return new Error(`Unknown filter: ${visibleFilter}`);
        }
    }
);

export const getCompletedTodoCount = createSelector(
    [getTodos],
    todos =>
        todos.reduce((count, todo) => {
            return todo.completed ? count + 1 : count;
        }, 0)
);
