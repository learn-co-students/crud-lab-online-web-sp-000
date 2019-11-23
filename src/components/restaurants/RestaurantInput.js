import React from "react"

class RestaurantInput extends React.Component {

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
		this.props.addRestaurant(this.state.text);
		this.setState({
			text: ""
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Restaurant name:{" "}
					<input type="text"
								 placeholder="(enter name)"
								 value={this.state.text}
								 onChange={this.handleChange} />
				</label>{" "}
				<input type="submit" />
			</form>
		)
	}

}

export default RestaurantInput
