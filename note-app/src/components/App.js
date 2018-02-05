import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetError, signOut } from '../actions';
import { NavLink } from 'react-router-dom';

import NotLoggedIn from './NotLoggedIn';
// import logo from '../assets/logo.svg';

import '../styles/css/index.css';

class App extends Component {
  componentDidMount() {
    this.resetError();
  }

  resetError = _ => {
    this.props.resetError();
  };

  signOut = _ => {
    this.props.signOut();
  };

  render() {
    return (
      <div className="App">
        {this.props.isLoggedIn ? (
          <div className="AppLoggedIn">
            <div className="AppStatusBar">
              <NavLink to="/" className="AppStatusBar__SignOutButton--NavLink">
                <button
                  className="AppStatusBar__SignOutButton"
                  onClick={this.signOut}
                >
                  Sign out
                </button>
              </NavLink>
            </div>

            <header className="AppHeader">
              <p className="AppHeader__title">Notes&reg;</p>
            </header>

            <div className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </div>
          </div>
        ) : (
          <div className="AppNotLoggedIn">
            <NotLoggedIn />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    //
  };
};

export default connect(mapStateToProps, { resetError, signOut })(App);
