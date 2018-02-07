import React from 'react';

const StatusBar = props => {
  return (
    <div className="StatusBar">
      <div className="StatusBar__signOutButton" onClick={props.signOutHandler}>
        {!props.appIsLoggedIn ? 'Sign In' : 'Sign out'}
      </div>
    </div>
  );
};

export default StatusBar;
