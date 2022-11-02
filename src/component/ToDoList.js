import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      index: 0
    };
  }

  dalyTaskDonehandler = (i,e) =>{
    let checked = e.target.checked
    this.setState((prev)=>({...(prev.toDos[i].checked) = checked}));
    // this.setState({toDos[i].checked : e.target.value})
    console.log(i,this.state.toDos[i].checked)
  }

  addTask = e => {
    this.setState({index:this.state.index+1});
    let addIt = {
      No: this.state.index,
      massage: e,
      checked: false
    }
    this.setState({toDos: [...this.state.toDos,addIt]})
  }

  removeTask = i => {
    // this.state.toDos.splice(i,1);
    // this.setState({toDos: this.state.toDos.splice(i,1)});
    this.newToDos = this.state.toDos.filter(todo => todo.No !== i + 1);
    console.log(i);
    // console.log(this.newToDos);
    this.setState({toDos:this.newToDos});
    // this.setState((pre => ({...pre.toDos[i].No = i})));
    
    // console.log(i)
  }

  render() {
    // this.state.toDos.map((item,i)=>{
    //   this.setState((pre => ({...pre.toDos[i].No = i})));
    // })
    return (
      <>
      <div className="container">
        <h1 className="my-3">todolist</h1>
        <AddTask newTask={this.addTask} />
        <ol>
        {this.state.toDos.map((item, i)=>{
          // this.setState((pre => ({...(pre.toDos[i].No = i)})));
         return (
          <li><ToDoItem  inputId={i} done={this.state.toDos[i].checked} key={item.No} onClick={()=>this.removeTask(i)} onChange={(e)=>this.dalyTaskDonehandler(i,e)} massage={item.massage} num={item.No} /></li>
         )
        })}
        </ol>
      </div>
      </>
    );
  }
}
