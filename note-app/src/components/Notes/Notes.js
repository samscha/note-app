import React, { Component } from 'react';

import Note from './Note';

import '../../styles/css/index.css';

class Notes extends Component {
	state = {
		notes: [],
	};

	componentDidMount() {
		this.setState({ notes: this.props.notes });
	}

	render() {
		return (
			<div className="Notes">
				{this.state.notes.map(note => {
					return (
						<div key={note.id} className="NoteContainer">
							<Note note={note} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default Notes;
