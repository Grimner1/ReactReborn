import React, { Component } from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

class Auth extends Component {
  state = {
    isLogin: false,
  };

  handleClick = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLogin={this.state.isLogin} />
        {this.state.isLogin ? (
          <Logout func={this.handleClick} />
        ) : (
          <Login func={this.handleClick} />
        )}
      </div>
    );
  }
}

export default Auth;
