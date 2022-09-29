// == Import
// npm
import React from 'react';
// data
import tasksData from '../../data/tasks';
// composants
import AddTask from '../AddTask';
import Counter from '../Counter';
import TasksList from '../TasksList';

import './app.scss';

// == Composant

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasksData,
      newTask: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  getRemainingTask = () => {
    const { tasks } = this.state;
    const remainingTasks = tasks.filter((task) => task.done === false);

    return remainingTasks.length;
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, newTask } = this.state;

    const ids = tasks.map((task) => task.id);
    const maxId = Math.max(...ids);

    const newTasktoAdd = {
      id: maxId + 1,
      label: newTask,
      done: false,
    };

    const newTasks = [...tasks, newTasktoAdd];

    this.setState({
      tasks: newTasks,
    });
  };

  handleChecked = (taskId) => {
    const { tasks } = this.state;

    const tasksModified = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    this.setState({
      tasks: tasksModified,
    });
  };

  render() {
    const { tasks, newTask } = this.state;

    const remainingTask = this.getRemainingTask();

    return (
      <div className="app">
        <AddTask value={newTask} change={this.handleChange} submit={this.handleSubmit} />
        <Counter counter={remainingTask} />
        <TasksList tasks={tasks} />
      </div>
    );
  }
}

// == Export
export default App;
