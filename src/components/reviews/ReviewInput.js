import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  onChangeHandler = event => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmitHandler = event => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.onSubmitHandler}>
          <input value={this.state.text} type="text" onChange={this.onChangeHandler} />
          <input type="submit" value="Add Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
