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
    // this.setState({toDos[i].checked : e.target.value})
    // console.log(i, this.state.toDos[i].checked);
  };

  addTask = (e) => {
    this.setState({ index: this.state.index + 1 });
    let addIt = {
      No: this.state.index,
      massage: e,
      checked: false,
    };
    this.setState({ toDos: [...this.state.toDos, addIt] });
  };

  removeTask = (item) => {
    // this.state.toDos.splice(i,1);
    // this.setState({toDos: this.state.toDos.splice(i,1)});
    // this.newToDos = this.state.toDos.filter(todo => todo.No !== i + 1);
    this.setState({
      toDos: this.state.toDos.filter((todo) => {return todo !== item}),
    });
    console.log(item);
    // console.log(this.newToDos);
    this.setState({ toDos: this.newToDos });
    // this.setState((pre => ({...pre.toDos[i].No = i})));

    // console.log(i)
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="my-3">todolist</h1>
          <AddTask newTask={this.addTask} />
          {this.state.toDos === [] ? (
            <div className={`container my-4 p-3 bg-white ${classes.card}`}>
              <h3 className="m-0">There is no to-do right now</h3>
            </div>
          ) : (
            <ol>
              {this.state.toDos.map((item, i) => {
                // this.setState((pre => ({...(pre.toDos[i].No = i)})));
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
      </>
    );
  }
}
