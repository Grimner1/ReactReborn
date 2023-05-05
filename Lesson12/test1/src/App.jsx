import React, { Component } from "react";
import ListItem from "./ListItem";
import CreateTask from "./CreateTask";
import { GetLists, PostTask, PutTask, DeleteTask } from "./DataStorage";

class App extends Component {
  state = {
    inputText: "",
    lists: "",
  };

  componentDidMount() {
    this.reRender();
  }

  reRender = () => {
    GetLists().then((list) => {
      this.setState({
        lists: list,
      });
    });
  };

  handleChangeInput = (el) => {
    this.setState({
      inputText: el.target.value,
    });
  };

  handleChangeChecked = (el) => {
    const id = el.target.dataset.id;

    GetLists(id)
      .then((task) => {
        task.checked = !task.checked;
        return task;
      })
      .then((task) => PutTask(task, id))
      .then((response) => {
        if (response.ok) {
          this.reRender();
        } else throw new Error("Failed to Change Checkbox");
      });
  };

  handleChangeAddTask = () => {
    if (!this.state.inputText) {
      return;
    }

    const newTask = {
      id: Math.random(),
      text: this.state.inputText,
      checked: false,
    };

    PostTask(newTask)
      .then((response) => {
        if (response.ok) {
          this.reRender();
        } else throw new Error("Failed to Add new task");
      })
      .then(() => {
        this.setState({
          inputText: "",
        });
      });
  };

  handleChangeDeleteTask = (el) => {
    const id = el.target.dataset.id;

    DeleteTask(id).then((response) => {
      if (response.ok) {
        this.reRender();
      } else {
        throw new Error("Failed to delete task");
      }
    });
  };

  render() {
    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTask
            handleChangeInput={this.handleChangeInput}
            handleChangeAddTask={this.handleChangeAddTask}
            inputText={this.state.inputText}
          />
          <ul className="list">
            {this.state.lists &&
              this.state.lists
                .sort((el1, el2) => el1.checked - el2.checked)
                .map((el) => (
                  <ListItem
                    task={el}
                    key={el.id}
                    handleChangeChecked={this.handleChangeChecked}
                    handleChangeDeleteTask={this.handleChangeDeleteTask}
                  />
                ))}
          </ul>
        </main>
      </div>
    );
  }
}

//sasas

export default App;
