import React, { Component } from "react";

class Dimension extends Component {
  constructor(props) {
    super(props);
    const { innerWidth, innerHeight } = window;
    this.state = {
      windowSize: `${innerWidth} x ${innerHeight}`,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setState({
      windowSize: `${innerWidth} x ${innerHeight}`,
    });

    document.title = this.state.windowSize;
  };

  render() {
    return <div>{this.state.windowSize}</div>;
  }
}

export default Dimension;
