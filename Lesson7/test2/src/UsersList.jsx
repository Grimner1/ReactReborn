import React, { Component } from "react";
import User from "./Users";

class UsersList extends Component {
  state = {
    sort: null,
  };

  click = () => {
    if (this.state.sort === "asc") {
      this.setState({
        sort: "desc",
      });
    } else {
      this.setState({
        sort: "asc",
      });
    }
  };

  render() {
    let usersList;

    if (this.state.sort) {
      usersList = this.props.users
        .slice()
        .sort((a, b) =>
          this.state.sort === "asc" ? a.age - b.age : b.age - a.age
        );
    } else {
      usersList = this.props.users;
    }

    console.log(usersList);

    return (
      <div>
        <button className="btn" onClick={this.click}>
          {this.state.sort}
        </button>
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
