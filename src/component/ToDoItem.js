import React from "react";
import classes from "./ToDoItem.module.css"

export default function ToDoItem(props) {
  return (
    <div className={`d-flex align-items-center my-4 p-3 bg-white ${classes.card}`}>
        <p className="disabled m-0">{props.num}</p>
        <input type="checkbox" className="mx-2" />
        <p className="m-0">{props.massage}</p>
    </div>
  );
}