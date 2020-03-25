import React from "react";
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            undo
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
            redo
        </button>
    </p>
);

const mapStateToProps = state => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
});

const mapDispatchToProps = {
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
};

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
