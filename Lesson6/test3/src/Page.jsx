import React, { Component } from "react";
import Message from "./Message";
import FineProduct from "./FindeProduct";
import ProductArray from "./ProductArray";

class Page extends Component {
  state = {
    text: "",
  };

  click = (e) => {
    const text = e.target.textContent;

    if (text === "Clear") {
      this.setState({
        text: "",
      });
    } else {
      this.setState({
        text: FineProduct(text, ProductArray),
      });
    }
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={this.click}>
            IPhone 13
          </button>
          <button className="btn" onClick={this.click}>
            IPhone 12
          </button>
          <button className="btn" onClick={this.click}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
