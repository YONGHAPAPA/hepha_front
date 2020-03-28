import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import FilterLink from "../components/FilterLink";
import UndoRedo from "../components/UndoRedo";

const App = () => (
    <div>
        <div>
            <AddTodo />
            <TodoList />
            <FilterLink />
            <UndoRedo />
        </div>
    </div>
);

export default App;
