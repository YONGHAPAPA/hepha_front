import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById("root")
);
