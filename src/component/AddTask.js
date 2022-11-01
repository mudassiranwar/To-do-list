import React, { Component } from "react";
import classes from "./ToDoItem.module.css";

export default class AddTask extends Component {
  render() {
    return (
      <div
        className={`d-flex align-items-center my-4 p-3 bg-white ${classes.card}`}
      >
        <div className="mb-3 container-fluid">
          <label htmlFor="exampleInput" className="form-label">
            Add To Do
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInput"
          />
        </div>
      </div>
    );
  }
}
