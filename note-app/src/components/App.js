import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetError, signOut } from '../actions';
import { NavLink } from 'react-router-dom';

import StatusBar from './StatusBar';
import NotLoggedIn from './NotLoggedIn';
import Notes from './Notes';

// import logo from '../assets/logo.svg';

import '../styles/css/index.css';

class App extends Component {
  state = {
    username: '1',
  };

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
            <StatusBar
              username={this.state.username}
              signOutHandler={this.signOut}
            />

            <header className="AppHeader">
              <p className="AppHeader__title">Notes&reg;</p>
            </header>

            <Notes notes={this.props.notes} />
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
    notes: state.notes,
    //
  };
};

export default connect(mapStateToProps, { resetError, signOut })(App);
