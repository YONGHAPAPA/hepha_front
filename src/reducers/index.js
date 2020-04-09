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
            return [...childState, action.childId];
        case REMOVE_CHILD:
            return childState.filter(id => id !== action.childId);
        default:
            return childState;
    }
};

const node = (state, action) => {
    switch (action.type) {
        case CREATE_NODE:
            return {
                id: action.nodeId,
                counter: 0,
                childIds: []
            };
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case ADD_CHILD:
        case REMOVE_CHILD:
            return {
                ...state,
                childIds: childIds(state.childIds, action)
            };
        default:
            return state;
    }
};

const getAllDescendantIds = (state, nodeId) =>
    state[nodeId].childIds.reduce(
        (acc, childId) => [
            ...acc,
            childId,
            ...getAllDescendantIds(state, childId)
        ],
        []
    );

const deleteMany = (state, ids) => {
    state = { ...state };
    ids.forEach(id => delete state[id]);
    return state;
};

export default (state = {}, action) => {
    const { nodeId } = action;
    if (typeof nodeId === "undefined") {
        return state;
    }

    if (action.type === DELETE_NODE) {
        const descendantIds = getAllDescendantIds(state, nodeId);
        return deleteMany(state, [nodeId, ...descendantIds]);
    }

    return {
        ...state,
        [nodeId]: node(state[nodeId], action)
    };
};
