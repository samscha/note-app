import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions';

import Note from './Note';

import '../../styles/css/index.css';

class Notes extends Component {
	state = {
		notes: [],
		displayNotes: [],
		isEditingAllNotes: false,
		isViewingSingleNote: false,
	};

	componentDidMount() {
		this.setState({ notes: this.props.notes, displayNotes: this.props.notes });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.notes.length !== this.props.notes)
			this.setState({ notes: nextProps.notes, displayNotes: nextProps.notes });
	}

	detailedNoteView = note => {
		this.setState({ displayNotes: [note], isViewingSingleNote: true });
	};

	returnToAllNotes = _ => {
		this.setState({
			displayNotes: [...this.state.notes],
			isViewingSingleNote: false,
		});
	};

	deleteNoteButtonClickedHandler = noteId => {
		this.setState({ isViewingSingleNote: false });
		this.props.deleteNote(noteId);
	};

	render() {
		return (
			<div className="Notes">
				{this.state.displayNotes
					.filter(
						note =>
							note.title.includes(this.props.searchQuery) ||
							note.text.includes(this.props.searchQuery),
					)
					.map(note => {
						return (
							<div key={note.id} className="NotesNoteContainer">
								<div className="NoteStatusBar">
									{this.state.isViewingSingleNote ? null : (
										<div
											className="NoteDeleteButton"
											onClick={_ =>
												this.deleteNoteButtonClickedHandler(note.id)
											}
										>
											&#x2715;
										</div>
									)}

									{this.state.isViewingSingleNote ? null : (
										<div
											className="NoteEditSingleButton"
											onClick={_ => this.detailedNoteView(note)}
										>
											<span role="img" aria-label="magnifying-glass">
												&#x1f50d;
											</span>
										</div>
									)}
								</div>

								<div className="NoteContainer">
									<Note
										note={note}
										isViewingSingleNote={this.state.isViewingSingleNote}
										returnToAllNotes={this.returnToAllNotes}
									/>
								</div>
							</div>
						);
					})}
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
