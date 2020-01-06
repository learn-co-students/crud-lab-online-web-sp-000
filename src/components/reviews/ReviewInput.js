import React, { Component } from 'react';


class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <p>Submit Review</p>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          />
          <input type="submit" value="Add Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
