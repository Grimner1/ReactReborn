import React, { Component } from "react";

class ConectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
    };
  }

  componentDidMount() {
    // console.log("did");
    window.addEventListener("offline", this.offline);
    window.addEventListener("online", this.online);
  }

  componentWillUnmount() {
    window.removeEventListener("offline", this.offline);
    window.removeEventListener("online", this.online);
  }

  online = () => {
    // console.log("online");
    this.setState({
      status: true,
    });
  };

  offline = () => {
    // console.log("offline");
    this.setState({
      status: false,
    });
  };

  render() {
    return (
      <>
        {this.state.status ? (
          <div className="status">Online</div>
        ) : (
          <div className="status status_offline">Offline</div>
        )}
      </>
    );
  }
}

export default ConectionStatus;
