import React, { Component } from "react";
import Moment from "react-moment";

import classes from "./output.module.css";

class output extends Component {
  render(props) {
    const { location, date, tunes } = this.props;
    // console.log(tunes)
    return (
      <div className={classes.Output}>
        <h1 className={classes.Title}>{location}</h1>
        {date !== "" ? (
          <h3 className={classes.Date}>
            <Moment format="DD/MM/YYYY">{date}</Moment>
          </h3>
        ) : null}

        <ol className={classes.List}>
          {tunes.map((tune, i) => (
            <li key={i} className={classes.ListItem}>
              {tune}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default output;
