import React from "react";

const User = ({ user }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px auto",
        width: "300px",
      }}
    >
      <img
        src={user.picture.large}
        alt="user"
        style={{ borderRadius: "50%" }}
      />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>
        <strong>📧</strong> {user.email}
      </p>
      <p>
        <strong>👤</strong> {user.login.username}
      </p>
    </div>
  );
};

export default User;
