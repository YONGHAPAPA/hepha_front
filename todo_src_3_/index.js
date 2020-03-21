import React from "react";
import { render } from "react-dom";
import {} from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import {
    logger,
    crashReporter,
    rafScheduler,
    vanillaPromise,
    readyStatePromise,
    thunk
} from "./middlewares";

const middlewares = applyMiddleware(
    logger,
    crashReporter,
    rafScheduler,
    vanillaPromise,
    readyStatePromise,
    thunk
);
//const store = createStore(rootReducer, composeWithDevTools());

const store = createStore(
    rootReducer,
    composeWithDevTools(middlewares)
);

render(
    <Provider store={store}>
        <div>
            <div>index page</div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </Provider>,
    document.getElementById("root")
);
