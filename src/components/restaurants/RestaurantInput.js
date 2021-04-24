import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    // dispatch action to update state
    const restaurantObj = {
      text: this.state.text
    };
    this.props.addRestaurant(restaurantObj)

    // reset state to empty
    this.setState({
      text: ''
    })
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <p><input
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange}
            /></p>
          <p><input type="submit" /></p>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
