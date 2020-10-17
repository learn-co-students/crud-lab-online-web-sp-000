import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

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
    const review = {
      restaurantId: this.props.restaurant.id,
      text: this.state.text
    }
    this.props.addReview(review);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
