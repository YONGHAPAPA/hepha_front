import {
    INCREMENT,
    ADD_CHILD,
    REMOVE_CHILD,
    CREATE_NODE,
    DELETE_NODE
} from "../actions";

const childIds = (childState, action) => {
    switch (action.type) {
        case ADD_CHILD:
            return [...childState, action.child];
        case REMOVE_CHILD:
            return childState.filter(id => id !== action.childId);
        default:
            return childState;
    }
};

const node = (state, action) => {};
