import React from "react";

const Dialog = ({ children, tittle, close }) => {
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{tittle}</h4>
        <button className="dialog__close-btn" onClick={close}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

export default Dialog;
