import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`the current state is ${this.state.text}`)
    this.props.addReview(this.state.text, this.props.restaurant.id);
    this.setState({
      text: ''
    })
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleInputChange} value={this.state.text} />
          <input type="submit"/>

        </form>
      </div>
    );
  }
};

export default ReviewInput;
