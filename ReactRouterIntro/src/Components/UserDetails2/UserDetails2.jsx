import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const userResolve = use(userPromise);

  return (
    <div>
      <h1> {userResolve.name} </h1>
    </div>
  );
};

export default UserDetails2;
