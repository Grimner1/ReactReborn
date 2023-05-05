import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      avatarUrl: "",
      location: "",
      userId: this.props.match.params.userId,
    };
  }

  componentDidMount() {
    this.fetchUser(this.state.userId);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props.match.params.userId !== nextState.userId);
  //     return this.props.match.params.userId !== nextState.userId;
  //   }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userId !== this.props.match.params.userId) {
      this.fetchUser(this.props.match.params.userId);
    }
  }

  fetchUser = (userId) =>
    fetch(`https://api.github.com/users/${userId}`)
      .then((userData) => userData.json())
      .then((user) => {
        console.log(user);
        this.setState({
          userName: user.name,
          avatarUrl: user.avatar_url,
          location: user.location,
          userId: user.login,
        });
      });

  render() {
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={this.state.avatarUrl}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{this.state.userName}</span>

          <span className="user__location">{this.state.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
