import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import User from "./User";

const Users = () => {
  //   state = {
  //     userName: "",
  //     avatarUrl: "",
  //     userId: "",
  //   };

  //   linkOnUser = (e) => {
  //     // console.log(e.target.textContent);
  //     this.fetchUser(e.target.textContent);
  //   };

  //   fetchUser = (userId) =>
  //     fetch(`https://api.github.com/users/${userId}`)
  //       .then((userData) => userData.json())
  //       .then((user) => {
  //         this.setState({
  //           userName: user.name,
  //           avatarUrl: user.avatar_url,
  //           userId: user.login,
  //         });
  //       });

  //   render() {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/google">google</Link>
        </li>
      </ul>
      <Switch>
        <Route path={"/users/:userId"} component={User} />

        <Route path={"/users"}>
          <span>Select a user plaese</span>
        </Route>
      </Switch>
    </div>
  );
};
// }

export default Users;
