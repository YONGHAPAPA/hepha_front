import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

const onIncrement = () => {
    console.log(store.getState());
    store.dispatch({
        type: "INCREMENT"
    });
};

const onDecrement = () => {
    console.log(store.getState());
    store.dispatch({
        type: "DECREMENT"
    });
};

const render = () =>
    ReactDOM.render(
        <div>
            <Counter
                value={store.getState()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        </div>,
        document.getElementById("root")
    );

render();
store.subscribe(render);
