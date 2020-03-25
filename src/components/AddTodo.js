import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => (
    <div>
        <input type="input" id="txt" />
        <button
            onClick={() => {
                dispatch(
                    addTodo(document.getElementById("txt").value),
                    (document.getElementById("txt").value = "")
                );
            }}
        >
            Add
        </button>
    </div>
);

export default connect()(AddTodo);
