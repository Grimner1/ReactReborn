import React from "react";

const BoilingVerdict = (props) => {
  return (
    <>
      {props.temperature >= 100 ? (
        <p>The water would boil.</p>
      ) : (
        <p>The water would not boil.</p>
      )}
    </>
  );
};

export default BoilingVerdict;
