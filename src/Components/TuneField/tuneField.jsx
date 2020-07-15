import React from "react";
import Select from "react-dropdown-select";
import Tune from "./tune/tune";

import classes from "./tuneField.module.css";

export default function tuneField(props) {
  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
  ];

  const style = {
    borderRadius: "15px",
    marginBottom: "15px",
  };

  const { title, change, placeholder, numOfTunes, tunes } = props;

  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>{title}</h1>
      <Select
        className="Input"
        style={style}
        options={options}
        onChange={change}
        value={numOfTunes}
        placeholder={placeholder}
      />

      {numOfTunes > 0 ? <h3>Tune list:</h3> : null}
      {tunes.map((tune, i) => {
        return (
          <div key={i}>
            {i + 1}.{" "}
            <Tune
              key={i}
              value={tunes[i]}
              change={(e) => props.inputHandler(e, i)}
            />
          </div>
        );
      })}
    </div>
  );
}
