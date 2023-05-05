import React, { Component } from "react";
import Dialog from "./Dialog";

class App extends Component {
  state = {
    isOpen: false,
  };

  handleChangeOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleChangeClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.handleChangeOpen}>
          Show dialog
        </button>
        {this.state.isOpen && (
          <Dialog tittle={"Some tittle"} close={this.handleChangeClose}>
            <p>Some text: 123666</p>
          </Dialog>
        )}
      </div>
    );
  }
}

//sasas

export default App;
