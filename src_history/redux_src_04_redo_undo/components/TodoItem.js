import React from "react";

const TodoItem = ({ text, completed, click }) => (
    <li
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}
        onClick={click}
    >
        {text}
    </li>
);

export default TodoItem;
