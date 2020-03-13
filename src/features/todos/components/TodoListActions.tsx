import * as React from 'react';
import { RootState } from 'typesafe-actions'
import { connect } from 'react-redux';
import { loadTodosAsync, saveTodosAsync } from '../actions';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.todos.isLoadingTodos,
});

const dispatchProps = {
    loadTodos: loadTodosAsync.request,
    saveTodos: saveTodosAsync.request,
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
type State = {};

class TodoActions extends React.Component<Props, State> {
    render() {
        const { isLoading, loadTodos, saveTodos } = this.props;

        return(
            <section>
                <button type="button" onClick={() => loadTodos} disabled={isLoading} >load</button>
                <button type="button" onClick={() => saveTodos} disabled={isLoading} >save</button>
            </section>
        );
    }
}

export default connect(mapStateToProps, dispatchProps)(TodoActions);
