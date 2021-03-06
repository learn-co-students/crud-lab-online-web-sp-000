import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => this.setState({text: event.target.value})

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
            />

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

// enable users to create a review that is associated with a specific restaurant. 
// the form should have a text input for the content of the review along with an input of type submit.