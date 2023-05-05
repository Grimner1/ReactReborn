import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  state = {
    visible: true,
  };

  tiggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    var x = new Date();
    var y = x.getTimezoneOffset() / 60;
    console.log(y);

    return (
      <div>
        {this.state.visible && <Clock location={"Kyiv"} />}
        <button onClick={this.tiggle}>show\hide</button>
      </div>
    );
  }
}

//sasas

export default App;
