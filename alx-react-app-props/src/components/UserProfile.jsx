import React, { useContext } from 'react';
import UserContext from '../UserContext';
function UserProfile() {
    const UserProfile = (props) => {
        return (
          <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
          </div>
        );
      };
}

export default UserProfile;