import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
// import { Component } from "react";

const Greeting = (props) => {
  return <>{props.isLogin ? <UserGreeting /> : <GuestGreeting />}</>;
};

export default Greeting;
