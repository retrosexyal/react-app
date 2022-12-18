import React, { useState } from "react";
import "./button.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <button
        className="button"
        onClick={() => {
          return this.setState({ count: this.state.count + 1 });
        }}
      >
        {" "}
        Counts {this.state.count}{" "}
      </button>
    );
  }
}
