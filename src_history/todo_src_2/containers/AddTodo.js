import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    //console.log("1");
                    dispatch(addTodo(input.value));
                    //console.log("2");
                    input.value = "";
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
