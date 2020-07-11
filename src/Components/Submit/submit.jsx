import React from 'react';


import classes from './submit.module.css';

const submit = (props) => {
    return (
      <div className={classes.Container}>
        <button className={classes.Button} type="button">
          Generate
        </button>
        <button className={classes.Button} onClick={props.reset} type="button">
          Reset
        </button>
      </div>
    );
}

export default submit;
