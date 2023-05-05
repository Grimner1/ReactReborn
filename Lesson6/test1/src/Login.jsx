import React from "react";

const Login = ({ func }) => {
  return (
    <button className="btn login" onClick={func}>
      Login
    </button>
  );
};

export default Login;
