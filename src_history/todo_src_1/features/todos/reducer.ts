import { Todo } from 'MyModules'
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { loadTodosAsync, addTodo, removeTodo } from './actions';

export const isLoadingTodos = createReducer(false as boolean)
    .handleAction([loadTodosAsync.request], (state, action) => true)
    .handleAction([loadTodosAsync.success, loadTodosAsync.failure], (state, action) => false);

export const todos = createReducer([{
    id: '0', 
    title: 'Add new Todos using this form or load saved snapshot!!!'
}] as Todo[])
    .handleAction(loadTodosAsync.success, (state, action) => {
        
        console.log("loadTodosAsync.success");
        return action.payload
    })
    .handleAction(addTodo, (state, action) => {
        //console.log(state); 
        //console.log('------------------'); 
        //console.log(action.payload); 
        return [...state, action.payload]
    })
    .handleAction(removeTodo, (state, action) => {
        //console.log("action.payload : " + action.payload)
        return state.filter(i => i.id !== action.payload)
    });
    

const todosReducer = combineReducers({
    isLoadingTodos, 
    todos,
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;




