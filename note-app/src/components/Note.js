import React, { Component } from 'react';

import '../styles/css/index.css';

class Note extends Component {
	state = {
		title: '',
		text: '',
	};

	componentDidMount() {
		this.setState({ title: this.props.note.title, text: this.props.note.text });
	}

	noteClickHandler = _ => {
		this.setState({ isEditing: this.state.isEditing });
	};

	render() {
		return (
			<div className="Note" onClick={this.noteClickHandler}>
				<div className="IsNotEditing">
					<div className="Note__title">{this.state.title}</div>
					<div className="Note__text">{this.state.text}</div>
				</div>
			</div>
		);
	}
}

export default Note;
