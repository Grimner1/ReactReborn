import React from "react";

const Logout = ({ func }) => {
  return (
    <button className="btn logout" onClick={func}>
      Logout
    </button>
  );
};

export default Logout;
