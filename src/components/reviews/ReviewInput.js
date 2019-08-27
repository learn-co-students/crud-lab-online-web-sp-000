import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()

    this.state={
      text: ''
    }
  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = (event) => {console.log('review ', this.props.review)
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.text} onChange={this.changeHandler} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
