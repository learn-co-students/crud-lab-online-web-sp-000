import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = { text: '', restaurantId: this.props.restaurantId}

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({ ...this.state, text: ''})
  }

  handleChange = e => {
    this.setState({ text: e.target.value})
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Leave a Review
          <input type='text' value={this.state.text} onChange={e => this.handleChange(e)}/>
        </label>
        <input type='submit'/>
      </form>
    );
  }
}

export default ReviewInput;
