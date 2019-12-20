import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview({
      restaurantId: this.props.restaurantId,
      text: this.state.text
    });
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    );
  }
}

export default ReviewInput;
