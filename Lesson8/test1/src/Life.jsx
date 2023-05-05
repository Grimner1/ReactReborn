import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return <div>{this.props.number}</div>;
  }
}

export default Life;
