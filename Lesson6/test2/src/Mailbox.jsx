import React from "react";

const Mailbox = (props) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">MESSAGES</span>
      {props.messages.length > 0 && (
        <span className="mailbox__count">{props.messages.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
