import React from "react";
import { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
    };
  }

  toggle() {
    console.log(this.state.status);
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    return (
      <div className="toggler" onClick={() => this.toggle()}>
        {this.state.status ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggler;
