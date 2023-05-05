import React from "react";

const click = (event) => {
  console.log(event.target.innerText);
};

const GoodButton = () => {
  return (
    <button className="fancy-button" onClick={click}>
      Click me!
    </button>
  );
};

export default GoodButton;
