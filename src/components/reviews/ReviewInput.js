import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onChange = event => {
    this.setState({
      text: event.target.value
    })
  }

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