import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props;

        return (
            <div>
                <div>#counter {value}</div>
                <div>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;
