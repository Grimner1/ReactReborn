import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      some: "",
    };
  }

  render() {
    const { name, age } = this.props;
    // console.log(this.props);

    return (
      <li className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
      </li>
    );
  }
}

export default User;
