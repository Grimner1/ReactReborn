import React, { Component } from "react";
import UserMenu from "./UserMenu";
import UserPropfile from "./UserProfile";

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.getUserData(this.props.userID);
  }

  getUserData = (userID) => {
    const userUrl = `https://api.github.com/users/${userID}`;
    fetch(userUrl)
      .then((response) => response.json())
      .then((userData) => {
        this.setState({
          userData,
        });
      });
  };

  render() {
    return (
      <div className="page">
        {this.state.userData && <UserMenu userData={this.state.userData} />}
        {this.state.userData && <UserPropfile userData={this.state.userData} />}
      </div>
    );
  }
}

//sasas

export default App;
