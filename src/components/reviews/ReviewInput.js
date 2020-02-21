import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  changeHandler = event => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })
  }
  render() {
    return (
      <div>
         <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.changeHandler} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
