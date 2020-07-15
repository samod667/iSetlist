import React, { Component } from "react";

import classes from "./App.module.css";

import Location from "./Components/Location/location";
import TuneField from "./Components/TuneField/tuneField";
import Submit from "./Components/Submit/submit";

class App extends Component {
  state = {
    location: "",
    date: "",
    numOfTunes: 0,
    textFields: [],
  };

  handleTextInput = (event) => {
    const input = event.target.value;

    this.setState({ location: input });
  };

  handleDateInput = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  handleNumOfTunes = (value) => {
    this.setState({
      numOfTunes: value[0].value,
      textFields: [...Array(value[0].value)],
    });
  };

  handleInputChange = (e, i) => {
    const textInputs = [...this.state.textFields];
    const input = e.target.value;
    textInputs[i] = input;

    this.setState({
      textFields: textInputs,
    });
    // console.log(textInputs)
  };

  handleSubmit = () => {};

  handleReset = () => {
    this.setState({
      location: "",
      date: "",
      numOfTunes: 0,
      textFields: [],
    });

    // console.log(this.state);
  };

  render() {
    const { location, date, textFields, numOfTunes } = this.state;

    return (
      <div className={classes.App}>
        <Location
          change={this.handleTextInput}
          title={"where?"}
          example={""}
          inputType={"text"}
          placeholder={"Describe here..."}
          value={location}
        />
        <Location
          change={this.handleDateInput}
          title={"when?"}
          inputType={"date"}
          value={date}
        />
        <TuneField
          title={"how many tunes?"}
          change={this.handleNumOfTunes}
          placeholder={"how many?"}
          inputHandler={this.handleInputChange}
          tunes={textFields}
          numOfTunes={numOfTunes}
        />
        <Submit
          reset={this.handleReset}
          submit={this.handleSubmit}
          location={location}
          date={date}
          tunes={textFields}
          numOfTunes={numOfTunes}
        />
      </div>
    );
  }
}

export default App;
