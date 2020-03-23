import React from "react";

const TodoItem = ({ text, completed, onClick }) => (
    <li
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}
        onClick={onClick}
    >
        {text}
    </li>
);

export default TodoItem;
