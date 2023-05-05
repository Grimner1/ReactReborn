import React, { Component } from "react";

class Search extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();

    console.log(this.state.value);
    // this.setState({
    //   value: "",
    // });
    // console.log(this.state.value);
  };

  render() {
    return (
      <form className="search">
        <input
          type="text"
          className="search__input"
          onChange={this.handleChange}
        />
        <button className="search__button" onClick={this.submit}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
