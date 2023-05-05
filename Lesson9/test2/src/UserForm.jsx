import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      student: "",
      occupation: "",
      about: "",
    };
  }

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    const val = type === "checkbox" ? checked : value;
    // console.log(name, val);
    this.setState({
      [name]: val,
    });
  };

  submit = (e) => {
    e.preventDefault();
    //   console.log(this.state);
    this.props.createUser(this.state);
  };

  render() {
    return (
      <form className="login-form">
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            onChange={this.handleChange}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="Sidney">Sidney</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            value={this.state.about}
            onChange={this.handleChange}
          ></textarea>
        </div>

        <button className="submit-button" type="submit" onClick={this.submit}>
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
