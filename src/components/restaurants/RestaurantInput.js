import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {

  constructor() {
    super(),
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const restaurant = {
      id: cuid(),
      text: this.state.text
    }
    this.props.addRestaurant(restaurant);
    this.setState({ text: '' });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
