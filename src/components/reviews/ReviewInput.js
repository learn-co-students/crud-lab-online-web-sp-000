import React, { Component } from 'react';
//import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    restaurantId: this.props.restaurantId,
    text: ''
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state);
    this.setState({ ...this.state, text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleTextChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
