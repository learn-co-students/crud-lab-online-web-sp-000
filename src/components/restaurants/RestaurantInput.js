import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='text' value={this.state.text.value} onChange={this.handleChange} />
        <input type='submit' />
        Restaurant Input
      </form>
    );
  }
};

export default RestaurantInput;
