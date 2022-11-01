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
          checked: false,
        },
        {
          No: 2,
          massage: "this is massage 2",
          checked: false,
        },
        {
          No: 3,
          massage: "this is massage 3",
          checked: false,
        },
      ],
    };
  }

  dalyTaskDonehandler = (i,e) =>{
    let checked = e.target.checked
    this.setState((prev)=>({...(prev.toDos[i].checked) = checked}));
    // this.setState({toDos[i].checked : e.target.value})
    console.log(i,this.state.toDos[i].checked)
  }

  addTask = e => {
    this.setState({toDos: [...this.state.toDos,{
      No: this.state.toDos.length + 1,
      massage: e,
      checked: false
    }]})
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-3">todolist</h1>
        <AddTask newTask={this.addTask} />
        {this.state.toDos.map((item, i)=>{
         return (
          <ToDoItem inputId={i} done={this.state.toDos[i].checked} key={item.No} onChange={(e)=>this.dalyTaskDonehandler(i,e)} massage={item.massage} num={item.No} />
         )
        })}
      </div>
    );
  }
}
