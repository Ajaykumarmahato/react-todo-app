import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <>
        <h1>{this.props.header}</h1>
      </>
    );
  }
}
