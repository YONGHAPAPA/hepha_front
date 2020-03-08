import React from "react";
import logo from "./logo.svg";
import "./App.css";




// function App() {
//     return <div className="App"></div>;
// }

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="" alt="logo"></img>
                    <h1 className="App-title">Welcome to React.</h1>
                </header>
                <p className="App-intro">
                    to get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
            
        );
    }
}

export default App;
