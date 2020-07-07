import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let review = this.props.setRestaurantId({text: this.state.text})
    this.props.addReview(review)
    this.setState({
      text: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review: </label>
          <input type='text' value={this.state.text} onChange={this.handleChange} name='text'/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;