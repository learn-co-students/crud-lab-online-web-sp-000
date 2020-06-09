import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  inputChangeHandler = event => {
    this.setState({
      text: event.target.value
    })
  }

  reviewFormSubmitHandler = event => {
    event.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurant.id,
    }
    this.props.addReview(review);
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.reviewFormSubmitHandler}>
          <label>Create a review for {this.props.restaurant.text}: </label><br />
          <input type="text" onChange={this.inputChangeHandler} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
