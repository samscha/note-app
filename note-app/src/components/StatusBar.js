import React from 'react';
import { NavLink } from 'react-router-dom';

const StatusBar = props => {
  return (
    <div className="StatusBar">
      <NavLink to="/" className="StatusBar__signOutButton--NavLink">
        <div
          className="StatusBar__signOutButton"
          onClick={props.signOutHandler}
        >
          Sign out
        </div>
      </NavLink>
    </div>
  );
};

export default StatusBar;
