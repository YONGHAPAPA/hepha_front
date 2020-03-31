import cuid from "cuid";

import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODO,
    CLEAR_COMPLETED
} from "../constants/ActionTypes";

const initialState = [
    {
        text: "Please Add Todo",
        completed: false,
        id: 0
    }
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id:
                        state.reduce(
                            (maxId, todo) => Math.max(maxId, todo.id),
                            -1
                        ) + 1,
                    text: action.text,
                    completed: false
                }
            ];
        case DELETE_TODO:
            return state.filter(t => t.id !== action.id);
        case EDIT_TODO:
            return state.map(t =>
                t.id === action.id ? { ...t, text: action.text } : t
            );
        case COMPLETE_TODO:
            return state.map(t =>
                t.id === action.id
                    ? { ...t, completed: !t.completed }
                    : t
            );
        case COMPLETE_ALL_TODO:
            const areAllCompleted = state.every(t => t.completed); //check?? tutorial logic...
            return state.map(t => ({
                ...t,
                completed: !areAllCompleted
            }));
        case CLEAR_COMPLETED:
            return state.filter(t => !t.completed);
        default:
            return state;
    }
};

export default todos;
