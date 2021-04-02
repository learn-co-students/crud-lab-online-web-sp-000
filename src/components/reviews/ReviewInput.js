import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Review Input
        <input type='text' name='text' value={this.state.value} onChange={this.handleChange} />
        <input type='submit' />
      </form>
    );
  }
};

export default ReviewInput;
