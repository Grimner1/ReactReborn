import React from "react";

const handleClick = () => console.log("Y!");

const Btn = () => {
  return (
    <button className="fancy-button" onClick={handleClick}>
      Click me!
    </button>
  );
};

export default Btn;
