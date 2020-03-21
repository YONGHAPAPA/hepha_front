import { connect } from "react-redux";
import { toggleTodo, Filters } from "../actions";
import TodoList from "../components/TodoList";

const getTodosByFilter = (todos, filter) => {
    //return todos;
    switch (filter) {
        case Filters.SHOW_ALL:
            return todos;
        case Filters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case Filters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProp = state => ({
    //todos2: state.todos
    todos2: getTodosByFilter(state.todos, state.filter)
});

const mapDispatchToProp = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
