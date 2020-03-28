import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

// const rootReducer = () => {
//     combineReducers(todos);
// };

// export default rootReducer;

export default combineReducers({
    todos,
    visibilityFilter
});
