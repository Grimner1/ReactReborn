import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Usesrs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Switch>
            <Route path={"/users"}>
              <Users />
            </Route>
            <Route path={"/"}>
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

//sasas

export default App;
