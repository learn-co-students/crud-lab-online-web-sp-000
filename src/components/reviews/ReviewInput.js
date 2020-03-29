import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    let newReview = this.state
    newReview.restaurantId = this.props.restaurant.id
    this.props.addReview(newReview)
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type='text' value={this.state.text} onChange={event => this.handleOnChange(event)}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
