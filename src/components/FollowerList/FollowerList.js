import React from "react";
import "./FollowerList.css";

function FollowerList({ followers }) {
  return (
    <div className="follower-list">
      <h2>Followers</h2>
      {followers.map((follower, index) => (
        <div key={index} className="follower">
          <img
            src={follower.profilePic}
            alt={`${follower.name}'s profile pic`}
          />
          <span>{follower.name}</span>
        </div>
      ))}
    </div>
  );
}

export default FollowerList;
