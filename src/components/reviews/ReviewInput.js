import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state ={
    text: "",
    restaurantId: this.props.restaurantId
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state)
    this.setState({
      text: "",
      restaurantId: this.props.restaurantId
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input name="text" value={this.state.text} onChange={this.handleOnChange} type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
