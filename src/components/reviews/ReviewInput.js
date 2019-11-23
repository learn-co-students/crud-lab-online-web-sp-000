import React from "react"

class ReviewInput extends React.Component {

	state = {
		text: ""
	}

	handleChange = event => {
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addReview({
			text: this.state.text,
			restaurantId: this.props.restaurantId
		});
		this.setState({
			text: ""
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Review:{" "}
					<input type="text"
								 placeholder="(enter review)"
								 value={this.state.text}
								 onChange={this.handleChange} />
				</label>{" "}
				<input type="submit" />
			</form>
		)
	}

}

export default ReviewInput
