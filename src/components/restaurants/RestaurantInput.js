import React, { Component } from 'react';

class RestaurantInput extends Component {
	state = {
		text: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addRestaurant(this.state.text)
		this.setState({
			text:''
		})
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	render() {
	  return (
	    <form onSubmit={this.handleSubmit}>
	    	<input type='text' onChange={this.handleChange} />
     		<button type='submit'>Submit</button>
	    </form>
	  );
	}

};

export default RestaurantInput;