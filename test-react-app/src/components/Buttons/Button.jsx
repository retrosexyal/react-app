import React, { useState } from "react";
import "./button.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isTougle: true,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ isTougle: !this.state.isTougle });
  };
  render() {
    const { count, isTougle } = this.state;
    const { text, test } = this.props;
    return (
      <>
        <button className="button" onClick={this.handleClick}>
          Counts {count} {isTougle ? text : "odd"} {test}
        </button>
      </>
    );
  }

}
