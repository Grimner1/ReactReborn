import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "",
  };

  handleChange = (event, scale) => {
    const temperature = event.target.value;

    this.setState({
      temperature,
      scale,
    });
  };

  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  tryConvert = (temperature, scale) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }

    if (scale === "fahrenheit") {
      return this.toCelsius(temperature);
    } else if (scale === "celsius") {
      return this.toFahrenheit(temperature);
    }
  };

  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "fahrenheit"
        ? this.tryConvert(temperature, scale)
        : temperature;
    const fahrenheit =
      scale === "celsius" ? this.tryConvert(temperature, scale) : temperature;

    return (
      <div>
        <TemperatureInput
          handleChange={this.handleChange}
          scale={"celsius"}
          temperature={celsius}
        />
        <TemperatureInput
          handleChange={this.handleChange}
          scale={"fahrenheit"}
          temperature={fahrenheit}
        />
        <BoilingVerdict temperature={celsius} />
      </div>
    );
  }
}

export default Calculator;
