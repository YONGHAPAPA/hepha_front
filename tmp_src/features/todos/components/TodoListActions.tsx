import { RootState } from 'typesafe-actions';
import * as React from 'react';
import { connect } from 'react-redux';

import { loadTodosAsync, saveTodosAsync } from '../actions';

import * as Test from '../test';



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

        
        //console.log(typeof(Test.ADD1));
        //console.log(typeof(Test.ADD2));
        //Test.switch_test();
        //console.log(Test.ADD3);
        //console.log(Test.TOGGLE);
        Test.map_test();

        return(
            <section>
                <button type='button' onClick={() => loadTodos} disabled={isLoading}>Load snapshot</button>&nbsp;
                <button type='button' onClick={() => saveTodos} disabled={isLoading}>Save snapshot</button>
            </section>
        );
    }
}

export default connect(mapStateToProps, dispatchProps)(TodoActions)

