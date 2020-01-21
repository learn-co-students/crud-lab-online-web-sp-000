import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
