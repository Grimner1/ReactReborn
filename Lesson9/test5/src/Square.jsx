import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button
        className="btn"
        onClick={this.props.setNewValue}
        disabled={this.props.endGame}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
