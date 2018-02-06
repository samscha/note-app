import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

import AddNewNote from './AddNewNote';
import Notes from './Notes';

import '../styles/css/index.css';

class AppLoggedIn extends Component {
  state = {
    isAddingNote: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes.length === this.props.notes.length + 1)
      this.noteAddedSuccessfully();
  }

  addNewNoteButtonClickedHandler = _ => {
    this.setState({ isAddingNote: true });
  };

  addNoteHandler = note => {
    this.props.addNote(note);
  };

  noteAddedSuccessfully = _ => {
    this.setState({ isAddingNote: false });
  };

  render() {
    return (
      <div className="AppLoggedIn">
        <header className="AppLoggedInHeader">
          <p className="AppLoggedInHeader__title">Notes&reg;</p>
        </header>

        <div
          className="AppLoggedInMidStatusBar"
          onClick={this.addNewNoteButtonClickedHandler}
        >
          <AddNewNote
            addNoteHandler={this.addNoteHandler}
            appIsAddingNote={this.state.isAddingNote}
          />
        </div>

        {this.state.isAddingNote ? null : <Notes notes={this.props.notes} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { addNote })(AppLoggedIn);
