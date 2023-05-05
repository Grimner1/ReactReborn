import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

const size = "40px";

class Auth extends Component {
  state = {
    status: 0,
  };

  click = () => {
    if (this.state.status === 0) {
      setTimeout(() => {
        this.setState({
          status: 1,
        });
      }, 2000);

      this.setState({
        status: 2,
      });
    } else
      this.setState({
        status: 0,
      });
  };

  render() {
    if (this.state.status === 0) {
      return <Login func={this.click} />;
    } else if (this.state.status === 1) {
      return <Logout func={this.click} />;
    } else if (this.state.status === 2) {
      return <Spinner size={size} />;
    }
  }
}

export default Auth;
