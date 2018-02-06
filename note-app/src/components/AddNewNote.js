import React, { Component } from 'react';

class AddNewNote extends Component {
	state = {
		title: '',
		text: '',
	};

	addNewNoteClickHandler = _ => {
		this.props.addNoteHandler(this.state);

		this.setState({ title: '', text: '' });
	};

	inputHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="AddNewNote">
				{!this.props.appIsAddingNote ? (
					<div className="NotAddingNewNote">+</div>
				) : (
					<div className="IsAddingNewNote">
						<form className="NewNote">
							<input
								className="NewNote__title"
								onChange={this.inputHandler}
								type="text"
								name="title"
								value={this.state.title}
								placeholder="title"
							/>

							<textarea
								className="NewNote__text"
								onChange={this.inputHandler}
								type="text"
								name="text"
								value={this.state.text}
								placeholder="note"
							/>
						</form>

						<div
							className="NewNote__button"
							onClick={this.addNewNoteClickHandler}
						>
							add note
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default AddNewNote;
