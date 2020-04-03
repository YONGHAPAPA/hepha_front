import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "./TodoTextInput";

const Header = ({ addTodo }) => (
    <header className="header">
        <h4>todos</h4>
        <TodoTextInput
            newTodo
            onSave={text => {
                if (text.length !== 0) {
                    addTodo(text);
                }
            }}
            placeholder="what needs to be done?"
        />
    </header>
);

Header.protoTypes = {
    addTodo: PropTypes.func.isRequired
};

export default Header;
