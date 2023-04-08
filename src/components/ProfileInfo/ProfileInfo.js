import React from "react";

const ProfileInfo = ({ user }) => {
  if (!user || !user.addresses) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>Addresses:</h2>
      {user.addresses.map((address) => (
        <div key={address.id}>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileInfo;
