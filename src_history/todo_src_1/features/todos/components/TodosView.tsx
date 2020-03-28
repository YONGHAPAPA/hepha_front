import * as React from 'react';
import TodoListActions from './TodoListActions';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

export default () => (
    <section>
        <TodoListActions />
        <br/>
        <AddTodoForm />
        <br/>
        <TodoList />
    </section>
);