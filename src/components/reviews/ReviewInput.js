import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div>
        <input type="text" />
        <input type="button" />
      </div>
    );
  }
};

export default ReviewInput;
