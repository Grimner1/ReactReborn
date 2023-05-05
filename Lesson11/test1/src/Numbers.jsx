import React, { Component } from "react";

class Numbers extends Component {
  shouldComponentUpdate(nextProps) {
    const type = this.props.type;
    const number = this.props.number;

    if (type === "odd") {
      return number % 2 === 0;
    } else if (type === "even") {
      return number % 2 === 1;
    } else if (type === "all") {
      return true;
    } else if (this.props.number === nextProps.number) {
      return false;
    }
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.tittle}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default Numbers;
