import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({restaurantId: this.props.restaurantId, text: this.state.text})
    this.setState({
      text: ''
    })
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' value='Add Review'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
