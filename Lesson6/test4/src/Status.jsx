import React from "react";
import Online from "./Online";
import Offline from "./Offline";

const Status = (props) => {
  return (
    <div className="status">{props.status ? <Online /> : <Offline />}</div>
  );
};

export default Status;
