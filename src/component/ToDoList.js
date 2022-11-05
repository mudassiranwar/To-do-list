import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";
import classes from "./ToDoItem.module.css";

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      index: 0,
    };
  }

  dalyTaskDonehandler = (i, e) => {
    let taskIsDone = e.target.checked;
    this.setState((prev) => ({ ...(prev.toDos[i].checked = taskIsDone) }));
  };

  addTask = (e) => {
    this.setState({ index: this.state.index + 1 });
    let addIt = {
      No: this.state.index,
      massage: e,
      checked: false,
    };
    this.setState({ toDos: [ addIt,...this.state.toDos] });
  };

  removeTask = (item) => {
    this.setState({
      toDos: this.state.toDos.filter((todo) => {return todo !== item}),
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="my-3">todolist</h1>
          <AddTask newTask={this.addTask} />
          {this.state.toDos.length < 1 ? (
            <div className={`container my-4 p-3 bg-white ${classes.card}`}>
              <h3 className="m-0">There is no to-do right now</h3>
            </div>
          ) : (
            <ol>
              {this.state.toDos.map((item, i) => {
                return (
                  <li key={i}>
                    <ToDoItem
                      currentToDo={item}
                      onClick={() => this.removeTask(item)}
                      onChange={(e) => this.dalyTaskDonehandler(i, e)}
                    />
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </React.Fragment>
    );
  }
}
