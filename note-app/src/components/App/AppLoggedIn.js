import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../../actions';

import AddNewNote from './AddNewNote';
import Notes from '../Notes//Notes';

import '../../styles/css/index.css';

class AppLoggedIn extends Component {
  state = {
    isAddingNote: false,
    notes: [],
    displayedNotes: [],
  };

  componentDidMount() {
    this.setState({
      notes: this.props.notes,
      displayedNotes: this.props.notes,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes.length === this.props.notes.length + 1)
      this.noteAddedSuccessfully(nextProps);

    if (nextProps.notes.length === this.props.notes.length - 1)
      this.updateNotesList(nextProps);
  }

  updateNotesList = nextProps => {
    this.setState({
      notes: nextProps.notes,
      displayedNotes: nextProps.notes,
    });
  };

  cancelAddNewButtonClicked = _ => {
    this.setState({ isAddingNote: false });
  };

  addNewNoteButtonClickedHandler = _ => {
    this.setState({ isAddingNote: true });
  };

  addNoteHandler = note => {
    this.props.addNote(note);
  };

  noteAddedSuccessfully = nextProps => {
    this.setState({
      notes: nextProps.notes,
      displayedNotes: nextProps.notes,
      isAddingNote: false,
    });
  };

  render() {
    return (
      <div className="AppLoggedIn">
        <header className="AppLoggedInHeader">
          <p className="AppLoggedInHeader__title">Notes&reg;</p>
        </header>

        <div className="AppLoggedInMidStatusBar">
          <AddNewNote
            cancelAddNewNoteClickHandler={this.cancelAddNewButtonClicked}
            addNewNoteButtonClickedHandler={this.addNewNoteButtonClickedHandler}
            addNoteHandler={this.addNoteHandler}
            appIsAddingNote={this.state.isAddingNote}
          />
        </div>

        {this.state.displayedNotes.length > 0 ||
        (this.state.displayedNotes.length === 0 && this.state.isAddingNote) ? (
          this.state.isAddingNote ? null : (
            <Notes notes={this.state.notes} />
          )
        ) : (
          <div className="AppLoggedInNoNotesInState">No notes. Add some!</div>
        )}
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
