import React from "react";
import { Component } from "react";
import TaskList from "./TasList";

class StartElem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [1, 2],
    };
  }

  addTask() {
    const text = document.querySelector(".task-input").value;

    const tasks = this.state.tasks;
    tasks.push(text);
    this.setState({
      tasks: tasks,
    });
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <div className="actions">
            <input className="task-input" type="text" />
            <button
              className="btn create-task-btn"
              onClick={() => this.addTask()}
            >
              Create
            </button>
          </div>
          <ul className="list">
            <TaskList list={this.state.tasks} />
          </ul>
        </main>
      </>
    );
  }
}

export default StartElem;

// 1. принажатии создаётся новы ли
// 2.
// 3.
// 4.
// 5.
// 6.
