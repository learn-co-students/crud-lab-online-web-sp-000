import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  inputChangeHandler() {

  }

  reviewFormSubmitHandler() {

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.reviewFormSubmitHandler}>
          <label>Create a review: </label><br />
          <input type="text" onChange={this.inputChangeHandler} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
