import React from "react";

import classes from "./tune.module.css";

export default function tune(props) {
  return (
    <input
      className={classes.Input}
      value={props.value}
      type="text"
      onChange={props.change}
    ></input>
  );
}
