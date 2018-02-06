import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetError, signOut } from '../actions';
// import { NavLink } from 'react-router-dom';

import StatusBar from './StatusBar';
import AddNewNote from './AddNewNote';
import Notes from './Notes';
import NotLoggedIn from './NotLoggedIn';

// import logo from '../assets/logo.svg';

import '../styles/css/index.css';

class App extends Component {
  state = {
    username: '1',
    isAddingNote: false,
  };

  componentDidMount() {
    this.resetError();
  }

  resetError = _ => {
    this.props.resetError();
  };

  signOut = _ => {
    this.props.signOut(this.state.username);
  };

  addNewNoteButtonClickedHandler = _ => {
    this.setState({ isAddingNote: true });
  };

  addNoteHandler = note => {
    this.props.addNote(note);

    this.setState({ isAddingNote: false });
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

            <div
              className="MidStatusBar"
              onClick={this.addNewNoteButtonClickedHandler}
            >
              <AddNewNote
                addNoteHandler={this.addNoteHandler}
                appIsAddingNote={this.state.isAddingNote}
              />
            </div>

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
