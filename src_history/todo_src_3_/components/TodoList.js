import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos2, toggleTodo }) => (
    <ul>
        {todos2.map(todo => (
            <TodoItem
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
);

export default TodoList;
