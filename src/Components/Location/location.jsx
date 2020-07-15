import React from "react";

import classes from "./location.module.css";

function Location(props) {
  return (
    <div className={classes.Location}>
      <h1 className={classes.Title}>{props.title}</h1>
      <p className={classes.Example}>{props.example}</p>
      <input
        onChange={props.change}
        className={classes.Input}
        type={props.inputType}
        value={props.value}
        placeholder={props.placeholder}
        autoFocus={props.inputType === "text" ? true : false}
      />
    </div>
  );
}

export default Location;
