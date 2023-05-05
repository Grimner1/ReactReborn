import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const User = ({ match }) => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((userData) => userData.json())
      .then((user) => {
        setUserData(user);
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={userData.avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

export default User;
