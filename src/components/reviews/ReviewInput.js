import React, { Component } from 'react';
import cuid from 'cuid';

class ReviewInput extends Component {
  state = {
    text: ''
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.addReview({id: cuid(), text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    })
  };

  whenChange = event => {
    this.setState({
      text: event.target.value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.formSubmit(event)}>
          <input type='text' onChange={event => this.whenChange(event)} value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
