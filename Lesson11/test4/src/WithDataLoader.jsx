import React, { Component } from "react";

const WithDataLoader = (WrappedComponent, url) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: "",
      };
    }

    componentDidMount() {
      return fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            data,
          });
        });
    }

    render() {
      return <WrappedComponent data={this.state.data} />;
    }
  };
};

export default WithDataLoader;
