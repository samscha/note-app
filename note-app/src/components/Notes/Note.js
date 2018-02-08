import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNote, deleteNote } from '../../actions';

import NoteTitle from './NoteTitle';
import NoteText from './NoteText';

import '../../styles/css/index.css';

class Note extends Component {
	state = {
		id: -1,
		title: '',
		text: '',
	};

	componentDidMount() {
		this.setState({
			id: this.props.note.id,
			title: this.props.note.title,
			text: this.props.note.text,
		});
	}

	editTitle = editedTitle => {
		if (!this.props.isViewingSingleNote)
			this.props.editNote({ ...this.state, title: editedTitle });

		this.setState({ title: editedTitle });
	};

	editText = editedText => {
		if (!this.props.isViewingSingleNote)
			this.props.editNote({ ...this.state, text: editedText });

		this.setState({ text: editedText });
	};

	deleteNoteButtonClickedHandler = _ => {
		this.props.deleteNote(this.state.id);
	};

	confirmEditButtonClickedHandler = _ => {
		this.props.editNote({ ...this.state });
		this.props.returnToAllNotes();
	};

	/*
	cancelEditSingleNoteButtonClickHandler = _ => {
		console.log(this.props.note);
		console.log(this.state);

		this.props.returnToAllNotes();
	};


				{this.props.isViewingSingleNote ? (
					<div
						className="SingleNoteViewButtons"
						onClick={this.cancelEditSingleNoteButtonClickHandler}
					>
						cancel edit
					</div>
				) : null}
				*/

	render() {
		return (
			<div className="Note">
				<NoteTitle
					title={this.props.note.title}
					editTitleHandler={this.editTitle}
				/>

				<NoteText text={this.props.note.text} editTextHandler={this.editText} />

				{this.props.isViewingSingleNote ? (
					<div
						className="SingleNoteViewButtons"
						onClick={this.confirmEditButtonClickedHandler}
					>
						confirm edit
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		//
	};
};

export default connect(mapStateToProps, { editNote, deleteNote })(Note);
