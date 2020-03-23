import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterLink from "./FilterLink";

class App extends React.Component {
    render() {
        return (
            <div>
                <div>#App</div>
                <AddTodo />
                <TodoList />
                <FilterLink />
            </div>
        );
    }
}

export default App;
