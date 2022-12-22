import React, { useState } from "react";
import "./button.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    let arr = 1;
    this.state = {
      count: 0,
      isTougle: true,
      arr: [],
      isLoad: false,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ isTougle: !this.state.isTougle });
  };
  render() {
    const { count, isTougle, arr, isLoad } = this.state;
    const { text, test } = this.props;
    return (
      <>
        <button className="button" onClick={this.handleClick}>
          Counts {count} {isTougle ? text : "odd"} {test}
        </button>
        <div>
          {isLoad ? arr[0].meanings.map(e=>e.partOfSpeech) : console.log("not load")}
        </div>
      </>
    );
  }
  componentDidMount() {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((res) => res.json())
      .then((json) => this.setState({ arr: json, isLoad: true }));
  }
}
