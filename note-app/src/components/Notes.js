import React from 'react';

import '../styles/css/index.css';

const Notes = props => {
	const notes = props.notes;

	return (
		<div className="Notes">
			{notes.map(note => {
				return (
					<div key={note.id} className="Note">
						{note.text}
					</div>
				);
			})}
		</div>
	);
};

export default Notes;
