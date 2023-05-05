import React, { Component } from "react";
import Expand from "./Expand";

class App extends Component {
  state = {
    isOpen: false,
  };

  toggleBtn = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand isOpen={this.state.isOpen} toggle={this.toggleBtn}>
          {/* <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class. 66666666666666
          </p> */}
        </Expand>
      </div>
    );
  }
}

//sasas

export default App;
