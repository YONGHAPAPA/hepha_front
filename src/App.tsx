import React, { Component } from 'react';
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';

import Description from './temp/Description';


interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component {

  render() {
    return (
      <div className="App">

        <Description countBy={3} />
      </div>
    );
  }
}


export default App;
