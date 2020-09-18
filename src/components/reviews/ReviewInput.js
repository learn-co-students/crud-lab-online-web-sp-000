import React, { Component } from 'react';

class ReviewInput extends Component {
//Establish state in the constructor.
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
//setState to typed in info from input
  onChange = event => {
    this.setState({
      text: event.target.value
    })
  }
//add a Review when "submit" is clicked. Send in the restaurant's ID, so that it is unique. Then, setState to be blank
  onSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" onChange={this.onChange} value={this.state.text}></input>
          <input type="submit" value="Add Review"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;