import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: '',
    });
  }


  render() {
    return (
      <div>
        <p>Leave a Review for {this.props.restaurant}</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' onChange={(event) => this.handleInput(event)} value={this.state.text}></input>
          <input type="Submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
