import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions';

import Note from './Note';

import '../../styles/css/index.css';

class Notes extends Component {
	state = {
		notes: [],
		displayNotes: [],
	};

	componentDidMount() {
		this.setState({ notes: this.props.notes, displayNotes: this.props.notes });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.notes.length !== this.props.notes)
			this.setState({ notes: nextProps.notes, displayNotes: nextProps.notes });
	}

	detailedNoteView = note => {
		this.setState({ displayNotes: [note] });
	};

	returnToAllNotes = _ => {
		this.setState({ displayNotes: [...this.state.notes] });
	};

	deleteNoteButtonClickedHandler = noteId => {
		this.props.deleteNote(noteId);
	};

	render() {
		return (
			<div className="Notes">
				{this.state.displayNotes.map(note => {
					return (
						<div key={note.id} className="NotesNoteContainer">
							<div className="NoteStatusBar">
								<div
									className="NoteDeleteButton"
									onClick={_ => this.deleteNoteButtonClickedHandler(note.id)}
								>
									&#x2715;
								</div>
							</div>

							<div
								className="NoteContainer"
								onClick={_ => this.detailedNoteView(note)}
							>
								<Note note={note} />
							</div>
						</div>
					);
				})}

				{this.state.displayNotes.length > 1 ? null : (
					<div className="NotesReturnButton" onClick={this.returnToAllNotes}>
						go back
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		//
	};
};

export default connect(mapStateToProps, { deleteNote })(Notes);
