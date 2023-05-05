import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    // e.preventDefault();
    // this.setState({
    //   value: e.target.value,
    // });

    this.props.onChange(e.target.value);
  };

  render() {
    const { filterText, count } = this.props;
    // console.log(filterText);

    return (
      <div>
        {
          <div className="filter">
            <span className="filter__count">{count}</span>
            <input
              type="text"
              className="filter__input"
              onChange={this.handleChange}
              value={filterText}
            />
          </div>
        }
      </div>
    );
  }
}

export default Filter;
