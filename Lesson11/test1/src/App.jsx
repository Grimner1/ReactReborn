import React, { Component } from "react";
import Numbers from "./Numbers";

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="app">
        {/* <!-- OddNumbers --> */}
        <Numbers
          tittle={"OddNumbers"}
          number={this.state.number}
          type={"odd"}
        />
        {/* <!-- EvenNumbers --> */}
        <Numbers
          tittle={"EvenNumbers"}
          number={this.state.number}
          type={"even"}
        />
        {/* <!-- Numbers --> */}
        <Numbers tittle={"Numbers"} number={this.state.number} type={"all"} />
        {/* <!-- Numbers --> */}
        <Numbers tittle={"Number 17"} number={17} type={17} />
      </div>
    );
  }
}

//sasas

export default App;
