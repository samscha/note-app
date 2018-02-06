import React, { Component } from 'react';

class AddNewNote extends Component {
	state = {
		title: '',
		text: '',
	};

	addNewNoteClickHandler = _ => {
		// this.props.addNote(this.state};
		// this.setState({title: '', text: '',}))
	};

	render() {
		return (
			<div className="AddNewNote">
				{!this.props.appIsAddingNote ? (
					<div className="NotAddingNewNote">+</div>
				) : (
					'hi'
				)}
			</div>
		);
	}
}

export default AddNewNote;
