import React from "react";
import classes from "./ToDoItem.module.css";

export default function ToDoItem(props) {
  let taskDone = props.currentToDo.checked;
  return (
    <>
    <div
      className={`d-flex align-items-center justify-content-between my-4 p-3 bg-white ${classes.card} ${taskDone && classes.disable}`}
    >
      <div className={`d-flex`}>
        <input type="checkbox" id={props.currentToDo.No} onChange={props.onChange} className="mx-2" />
        <label htmlFor={props.currentToDo.No} className={`m-0`}>{props.currentToDo.massage}</label>
      </div>
      <button onClick={props.onClick} className={`btn btn-danger btn-sm`}>delet</button>
    </div>
    </>
  );
}
