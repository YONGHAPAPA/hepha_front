import React from "react";
import TodoItem from "./TodoItem";
import { toggleTodo, VisibleFilters } from "../actions";
import { connect } from "react-redux";

const filterTodos = (todos, filter) => {
    //console.log("filterTodos > " + filter);

    switch (filter) {
        case VisibleFilters.SHOW_ALL:
            return todos;
        case VisibleFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case VisibleFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = state => ({
    todos: filterTodos(state.todos.present, state.visibleFilter)
});

const mapDispatchToProps = {
    onToggle: toggleTodo
};

const TodoList = ({ todos, onToggle }) => (
    <ul>
        {todos.map(todo => (
            <TodoItem
                text={todo.text}
                completed={todo.completed}
                click={() => onToggle(todo.id)}
            />
        ))}
    </ul>
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
