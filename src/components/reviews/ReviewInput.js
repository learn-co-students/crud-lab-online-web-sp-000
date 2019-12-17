import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview({ 
      review: { 
        text: this.state.text, 
        restaurantId: this.props.restaurantId
      }
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <input
          type="text"
          value={this.state.text}
          onChange={event => this.handleOnChange(event)} />
        <input type="submit" />
      </form>
    );
  }
};

export default ReviewInput;
