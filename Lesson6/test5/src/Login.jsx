import React from "react";

const Login = (props) => {
  return (
    <button className="login btn" onClick={props.func}>
      Login
    </button>
  );
};

export default Login;
