import React, { Component } from "react";

const UserForm = (props) => {
  const { handleChange, firstName, lastName } = props;

  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={lastName}
        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;
