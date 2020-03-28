import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
    console.log("getVisibleTodos >>>>>>>>>>>>>>>");
    console.log(todos);

    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProp = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProp = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
