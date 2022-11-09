import React, { Fragment } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./ToDoItem.module.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export default function ToDoItem(props) {
  let taskDone = props.currentToDo.checked;
  return (
    <Fragment>
      <div
        className={`d-flex align-items-center justify-content-between my-4 p-3 bg-white ${classes.card}`}
      >
        <div className={`d-flex ${taskDone && classes.disabled}`}>
          <input
            type="checkbox"
            id={props.currentToDo.No}
            checked={props.currentToDo.checked}
            onChange={props.onChange}
            className="mx-2"
          />
          <label className={`m-0`}>{props.currentToDo.massage}</label>
        </div>
        <div>
          <button onClick={props.onEditHandler} className={`btn btn-warning btn-sm mx-3 ${classes.btn}`}>
            <FaEdit />
          </button>
          <button onClick={props.onClick} className={`btn btn-danger text-dark btn-sm ${classes.btn}`}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
