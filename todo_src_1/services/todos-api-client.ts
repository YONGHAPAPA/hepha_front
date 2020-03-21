import { Todo } from 'MyModules';

let todos: Todo[] = [
    {
        id: '0', 
        title: 'snapshot has been loaded.'
    }
];

export function loadSnapshot(): Promise<Todo[]> {
    console.log("loadSnapshot - do Promise");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todos);
        }, 500);
    });
}

export function saveSnapshot(data: Todo[]): Promise<undefined> {

    console.log("saveSnapshot - do Promise");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            todos = data;
            resolve();
        }, 500);
    });
}