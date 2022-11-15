import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";
import EditCard from "./EditCard";
import ConfermBox from "./ConfermBox";

import classes from "./ToDoItem.module.css";

export default class ToDoList extends Component {
  constructor() {
    super();

    let initToDo;
    let editIndex;
    let editObj;

    if (localStorage.getItem("todo") === null) {
      initToDo = [];
    } else {
      initToDo = JSON.parse(localStorage.getItem("todo"));
    }

    this.state = {
      toDos: initToDo,
      index: initToDo.length === 0 ? 0 : initToDo[initToDo.length - 1].No,
      deleteObj: null,
      showEdit: false,
      deleteConfermBox: false,
    };
  }

  dalyTaskDonehandler = (i, e) => {
    let taskIsDone = e.target.checked;
    this.setState((prev) => ({ ...(prev.toDos[i].checked = taskIsDone) }));
    setTimeout(() => {
      localStorage.setItem("todo", JSON.stringify(this.state.toDos));
    }, 1);
  };

  addTask = (e) => {
    this.setState({ index: this.state.index + 1 });
    let addIt = {
      No: this.state.index,
      massage: e,
      checked: false,
    };
    this.setState({ toDos: [addIt, ...this.state.toDos] });
    setTimeout(() => {
      localStorage.setItem("todo", JSON.stringify(this.state.toDos));
    }, 1);
  };

  showEditHandler = (item, i) => {
    this.setState({
      showEdit: true,
    });
    this.editObj = this.state.toDos[i];
    // console.log(this.editObj);
    this.editIndex = i;
  };

  setEditHandler = (item) => {
    if (item.trim() === "") {
      alert("error");
    } else {
      this.setState({ showEdit: false });
      // console.log(this.editIndex);
      this.setState((prev) => ({
        ...(prev.toDos[this.editIndex].massage = item),
      }));
      setTimeout(() => {
        localStorage.setItem("todo", JSON.stringify(this.state.toDos));
      }, 1);
    }
  };

  // removeTask = (item) => {
  //   this.setState({
  //     toDos: this.state.toDos.filter((todo) => {
  //       return todo !== item;
  //     }),
  //   });
  //   setTimeout(() => {
  //     localStorage.setItem("todo", JSON.stringify(this.state.toDos));
  //   }, 1);
  // };

  removeTask = item =>{
    this.setState({
      deleteConfermBox:true,
      deleteObj:item
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showEdit && (
          <EditCard
            initVal={this.editObj.massage}
            editedToDo={this.setEditHandler}
          />
        )}
        {/*  {this.state.deleteConfermBox && (<ConfermBox confermTrue={} confermFalse={} />)}  */}
        <div className="container">
          <h1 className="my-3">To-Do-List</h1>
          <AddTask newTask={this.addTask} />
          {this.state.toDos.length < 1 ? (
            <div className={`container my-4 p-3 bg-white ${classes.card}`}>
              <h3 className="m-0">There is no to-do right now</h3>
            </div>
          ) : (
            this.state.toDos.map((item, i) => {
              return (
                <ToDoItem
                  currentToDo={item}
                  onDelete={() => this.removeTask(item)}
                  onChange={(e) => this.dalyTaskDonehandler(i, e)}
                  onEditHandler={() => this.showEditHandler(item, i)}
                  key={i}
                />
              );
            })
          )}
        </div>
      </React.Fragment>
    );
  }
}
