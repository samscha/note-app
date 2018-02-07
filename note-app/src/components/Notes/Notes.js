import React, { Component } from 'react';

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
			this.setState({ notes: nextProps.notes });
	}

	detailedNoteView = note => {
		this.setState({ displayNotes: [note] });
	};

	ReturnToAllNotes = _ => {
		this.setState({ displayNotes: [...this.state.notes] });
	};

	render() {
		return (
			<div className="Notes">
				{this.state.displayNotes.map(note => {
					return (
						<div
							key={note.id}
							className="NoteContainer"
							onClick={_ => this.detailedNoteView(note)}
						>
							<Note note={note} />
						</div>
					);
				})}

				{this.state.displayNotes.length > 1 ? null : (
					<div className="NotesReturnButton" onClick={this.ReturnToAllNotes}>
						return
					</div>
				)}
			</div>
		);
	}
}

export default Notes;
