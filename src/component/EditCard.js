import React, { useState } from "react";

import classes from "./EditCard.module.css";

const EditCard = (props) => {

    const [inputValue, setInputValue] = useState(props.initVal);

    const editChangeHandler = e => {
        setInputValue(e.target.value);
    }

    const setEditHandler = () => {
        props.editedToDo(inputValue);
    }

  return (
    <React.Fragment>
      <div className={`${classes.backLay}`}></div>
      <div className={`container p-3 px-4 bg-white ${classes.card}`}>
        <input
          onChange={editChangeHandler}
          value={inputValue}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <button className="btn btn-success btn-sm mt-3" onClick={setEditHandler}>Set Changes</button>
      </div>
    </React.Fragment>
  );
};

export default EditCard;
