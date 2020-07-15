import React from "react";
import ReactToPrint from "react-to-print";

import Output from "../Output/output";

import classes from "./submit.module.css";

class Submit extends React.Component {
  render() {
    return (
      <div className={classes.Container}>
        {/*<button className={classes.Button} type="button">
          Generate
    </button>*/}
        <div>
          <ReactToPrint
            trigger={() => (
              <button type="button" className={classes.Button}>
                Print iSetList
              </button>
            )}
            content={() => this.componentRef}
          />
          <button
            className={classes.Button}
            onClick={this.props.reset}
            type="button"
          >
            Reset
          </button>
          <hr />
        </div>
        {this.props.numOfTunes > 0 ? (
          <Output
            ref={(el) => (this.componentRef = el)}
            location={this.props.location}
            date={this.props.date}
            tunes={this.props.tunes}
          />
        ) : null}
      </div>
    );
  }
}

export default Submit;
