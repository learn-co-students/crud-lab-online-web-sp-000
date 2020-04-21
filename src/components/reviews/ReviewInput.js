import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.text}
          />
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
