import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {text: ''}

  render() {
    return (
      <div>
        <form>
        Review Input
          <input type='text'/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
