import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNote, deleteNote } from '../actions';

import NoteTitle from './NoteTitle';
import NoteText from './NoteText';

import '../styles/css/index.css';

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
		this.props.editNote({ ...this.state, title: editedTitle });

		this.setState({ title: editedTitle });
	};

	editText = editedText => {
		this.props.editNote({ ...this.state, text: editedText });

		this.setState({ text: editedText });
	};

	deleteNoteButtonClickedHandler = _ => {
		this.props.deleteNote(this.state.id);
	};

	render() {
		return (
			<div className="Note">
				<div
					className="DeleteNoteButton"
					onClick={this.deleteNoteButtonClickedHandler}
				>
					&#x2715;
				</div>

				<NoteTitle
					title={this.props.note.title}
					editTitleHandler={this.editTitle}
				/>
				<NoteText text={this.props.note.text} editTextHandler={this.editText} />
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
