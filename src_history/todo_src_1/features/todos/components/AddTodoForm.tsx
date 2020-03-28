import * as React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const dispatchProps = {
    addItem: addTodo,
}

type Props = {
    addItem: (title: string) => void;
}

type State = {
    title: string;
}

class AddTodoForm extends React.Component<Props, State> {

    readonly state = { title: ''};

    handleTitleChange: React.ReactEventHandler<HTMLInputElement> = (ev) => {
        this.setState({title: ev.currentTarget.value});
    };

    handleAddClick = () => {
        this.props.addItem(this.state.title);
        this.setState({title: ''});
    }

    render() {
        const {title} = this.state;

        return(
            <form onSubmit={(ev) => {ev.preventDefault();}}>
                <input
                    type="text"
                    style={{width: 500}}
                    value={title}
                    onChange={this.handleTitleChange}
                />
                <button type="submit" onClick={this.handleAddClick}>Add</button>
            </form>
        );
    }
}

export default connect(null, dispatchProps)(AddTodoForm)