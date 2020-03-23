import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./components/App";
import { composeWithDevTools } from "redux-devtools-extension";

const rootEl = document.getElementById("root");
const store = createStore(rootReducer, composeWithDevTools());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);
