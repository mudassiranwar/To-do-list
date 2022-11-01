import React, { Component } from "react";
import ErrorModule from "./ErrorModule";
import classes from "./ToDoItem.module.css";

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      showError: false,
    };
  }

  AddtaskChangeHandler = (e) => {
    this.setState({ task: e.target.value });
  };

  onSubmitHandler = (e) => {
    if (this.state.task === "") {
      this.setState({ showError: true });
      let errorTime = setTimeout(()=>this.setState({showError: false}),3000)
      return;
    }
    this.props.newTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <React.Fragment>
      {this.state.showError && <ErrorModule />}
        <div className={`my-4 p-3 bg-white ${classes.card}`}>
          <div className="mb-3 container-fluid">
            <label htmlFor="exampleInput" className="form-label">
              Add To Do
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              onChange={this.AddtaskChangeHandler}
              value={this.state.task}
            />
            <button
              className="btn btn-sm mt-3 btn-success"
              onClick={this.onSubmitHandler}
            >
              Add To Do
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
