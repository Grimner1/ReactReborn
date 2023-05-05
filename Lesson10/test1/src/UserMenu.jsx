import React from "react";

const UserMenu = (props) => {
  const { name, location, avatar_url } = props.userData;
  //   console.log(name, location, avatar_url);
  console.log(name, location, avatar_url);

  return (
    <header className="header">
      <div className="menu">
        <span className="menu__greeting"> {`Hello, ${name}`} </span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
      </div>
    </header>
  );
};

export default UserMenu;
