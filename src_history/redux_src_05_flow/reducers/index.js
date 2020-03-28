import todos from "./todos";
import visibleFilter from "./visibleFilter";
import { combineReducers } from "redux";

const rootReducer = combineReducers(todos, visibleFilter);

export default rootReducer;
