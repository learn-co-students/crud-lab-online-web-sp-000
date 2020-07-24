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

  render() {
    return (
      <div>
        <form>
          <label>Review</label>
          <input onChange={this.textChange} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
