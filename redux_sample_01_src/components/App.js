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

    populate = store => {
        console.log("populate > " + store.getState.toString());
    };

    //getState2 = { value2: 1 };

    render() {

        console.log("App > render > Start");
        var store = createStore(this.counter);
        //const { incrementNum } = this.getStore(store);

        store.subscribe(() => {
            //let incrementNum = store.getState().toString();
            document.getElementById('value').innerText = store.getState();
        });

        const increment = () => {
            store.dispatch({
                type:"INCREMENT"
            })
        }

        const decrement = () => {
            store.dispatch(
                {
                    type:"DECREMENT"
                }
            );
        }

        const incrementIfOdd = () => {
            const value = store.getState();
            console.log(value);
            if(value%2 !== 0){
                store.dispatch({
                    type:"INCREMENT"
                })
            }
        }

        const incrementSync = () => {
            setTimeout(()=>{
                store.dispatch(
                    {
                        type:"INCREMENT"
                    }
                )
            }, 5000);
        }

        //console.log(value);
        //const { value2 } = this.getState2;

        return (
            <div>
                <div>App</div>
                <div>
                    Clicked: <span id="value">0</span>
                    &nbsp;times&nbsp;
                    <button
                        onClick={increment}
                    >+</button>
                    <button
                        onClick={decrement}
                    >-</button>
                    <button 
                        onClick={incrementIfOdd}
                    >Increment if odd</button>
                    <button
                        onClick={incrementSync}
                    >Increment async</button>
                </div>
            </div>
        );
    }
}

export default App;
