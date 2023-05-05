import React from "react";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

const Colors = () => {
  const changeColor = (e) => {
    const color = e.target.style.backgroundColor;
    document.body.style.backgroundColor = color;
    console.log(color);
  };

  return (
    <div className="colors">
      <button
        style={{ backgroundColor: RED }}
        className="colors__button"
        onClick={changeColor}
      />

      <button
        style={{ backgroundColor: GREEN }}
        className="colors__button"
        onClick={changeColor}
      />

      <button
        style={{ backgroundColor: BLUE }}
        className="colors__button"
        onClick={changeColor}
      />
    </div>
  );
};

export default Colors;
