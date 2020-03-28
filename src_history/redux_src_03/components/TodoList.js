import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";

const getTodoByStatus = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

const mapStateToProps = state => ({
    todos: getTodoByStatus(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
);

//export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
