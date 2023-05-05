import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureInput = (props) => {
  //   console.log(props.temperature, props.scale);
  return (
    <fieldset>
      <legend>
        Enter temperature in {props.scale}
        {/* {scaleNames[scale]}: */}
      </legend>
      <input
        value={props.temperature}
        onChange={(e) => props.handleChange(e, props.scale)}
      />
    </fieldset>
  );
};

export default TemperatureInput;

// 1.вводим значение в поле №1
// 2. попадает в хедлченджь и конвертируется, в зависимости от названия поля: если цельсий - то запись в цельсий как надо, а запись в фаренгейт через функцию
