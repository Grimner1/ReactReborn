import React, { Component } from "react";
import CartTittle from "./CartTittle";
import PropductList from "./ProductList";
import Profile from "./Propfile";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  componentDidUpdate() {
    console.log("didUpdate");
  }

  handleChange = (event) => {
    console.log(this.state);

    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log(this.state);
  };

  render() {
    console.log(this.state.firstName);
    return (
      <div className="page">
        {this.state.firstName && (
          <h1 className="title">{`Hello, ${this.state.firstName} ${this.state.lastName}`}</h1>
        )}

        <main className="content">
          <ShoppingCart name={this.state.firstName} />
          <Profile
            handleChange={this.handleChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
          />
        </main>
      </div>
    );
  }
}

//sasas

export default App;
