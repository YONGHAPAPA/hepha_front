import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";

import rootReducer from "./reducers";

//const store = createStore(rootReducer);

render(<div></div>, document.getElementById("root"));
