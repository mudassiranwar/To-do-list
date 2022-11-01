import React from "react";
import classes from "./ToDoItem.module.css";

export default function ToDoItem(props) {
  let taskDone = props.done
  return (
    <div
      className={`d-flex align-items-center justify-content-between my-4 p-3 bg-white ${classes.card} ${taskDone && classes.disable}`}
    >
      <div className={`d-flex`}>
        <p className="disabled m-0">{props.num}</p>
        <input type="checkbox" id={props.inputId} onChange={props.onChange} className="mx-2" />
        <label htmlFor={props.inputId} className={`m-0`}>{props.massage}</label>
      </div>
      <button onClick={props.onClick} className={`btn btn-danger btn-sm`}>delet</button>
    </div>
  );
}
