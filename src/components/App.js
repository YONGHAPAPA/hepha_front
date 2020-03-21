import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import { createStore } from "redux";

class App extends Component {
    counter = (state, action) => {
        if (typeof state === "undefined") return 0;

        switch (action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state;
        }
    };

    populate = store => {};

    //getState2 = { value2: 1 };

    render() {
        var store = createStore(this.counter);
        //const { incrementNum } = this.getStore(store);

        store.subscribe(() => {
            let incrementNum = store.getState().toString();
            console.log("incrementNum : " + incrementNum);
        });

        //console.log(value);
        //const { value2 } = this.getState2;

        return (
            <div>
                <div>App</div>
                <div>
                    Clicked: <span id="value">0</span>
                    times
                    <button
                        onClick={() => {
                            store.dispatch({
                                type: "INCREMENT"
                            });
                        }}
                    >
                        +
                    </button>
                    <button>-</button>
                    <button>Increment if odd</button>
                    <button>Increment async</button>
                </div>
            </div>
        );
    }
}

export default App;
