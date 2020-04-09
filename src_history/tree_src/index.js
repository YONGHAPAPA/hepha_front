import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import generateTree from "./generateTree";
import {
    composeWithDevTools,
    devToolsEnhancer
} from "redux-devtools-extension";
import Node from "./containers/Node";

const tree = generateTree();
const store = createStore(reducer, tree, devToolsEnhancer());

render(
    <Provider store={store}>
        <Node id={0} />
    </Provider>,
    document.getElementById("root")
);
