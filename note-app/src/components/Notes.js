import React from 'react';

import '../styles/css/index.css';

const Notes = props => {
	const notes = props.notes;

	return (
		<div className="Notes">
			{notes.map(note => {
				return (
					<div key={note.id} className="Note">
						<div className="Note__title">{note.title}</div>
						<div className="Note__text">{note.text}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Notes;
