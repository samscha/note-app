import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNote } from '../actions';

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

	render() {
		return (
			<div className="Note" onClick={this.noteClickHandler}>
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

export default connect(mapStateToProps, { editNote })(Note);
