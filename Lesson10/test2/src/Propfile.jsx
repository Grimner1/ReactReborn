import React from "react";
import UserForm from "./UserForm";

const Profile = (props) => {
  const { handleChange, firstName, lastName } = props;
  //   console.log(changeForm, firstName, lastName);
  return (
    <div className="column">
      <UserForm
        firstName={firstName}
        lastName={lastName}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Profile;
