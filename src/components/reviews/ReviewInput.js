import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  textChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Review</label>
          <input onChange={this.textChange} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
