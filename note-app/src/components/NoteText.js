import React, { Component } from 'react';

import '../styles/css/index.css';

class NoteText extends Component {
	state = {
		text: '',
	};

	componentDidMount() {
		this.setState({ text: this.props.text });
	}

	handleInputChange = e => {
		this.setState({ text: e.target.value });
	};

	checkIfEnter = e => {
		if (e.keyCode === 13) {
			this.props.editTextHandler(this.state.text);
		}
	};

	checkIfTextChanged = _ => {
		if (this.state.text !== this.props.text) {
			this.props.editTextHandler(this.state.text);
		}
	};

	render() {
		return (
			<div className="NoteText">
				<input
					className="NoteText__input"
					onChange={this.handleInputChange}
					type="text"
					value={this.state.text}
					onKeyUp={this.checkIfEnter}
					onBlur={this.checkIfTextChanged}
				/>
			</div>
		);
	}
}

export default NoteText;
