import React from 'react';

import Note from './Note';

import '../styles/css/index.css';

const Notes = props => {
	const notes = props.notes;

	return (
		<div className="Notes">
			{notes.map(note => {
				return (
					<div key={note.id} className="NoteContainer">
						<Note note={note} />
					</div>
				);
			})}
		</div>
	);
};

export default Notes;
