import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [
        {
          No: 1,
          massage: "this is massage 1",
        },
        {
          No: 2,
          massage: "this is massage 2",
        },
        {
          No: 3,
          massage: "this is massage 3",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="my-3">todolist</h1>
        <AddTask />
        {this.state.toDos.map((item)=>{
         return (
          <ToDoItem key={item.No} massage={item.massage} num={item.No} />
         )
        })}
      </div>
    );
  }
}
