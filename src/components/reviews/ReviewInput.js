import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange= event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review:</label>
          <input
            placeholder='Enter Review'
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
