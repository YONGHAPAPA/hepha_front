import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
    return (
        <div>
            <div>
                <input id="txt" type="input" />
                <button
                    onClick={() => {
                        dispatch(
                            addTodo(
                                document.getElementById("txt").value
                            )
                        );
                        document.getElementById("txt").value = "";
                    }}
                >
                    add
                </button>
            </div>
        </div>
    );
};

export default connect()(AddTodo);
