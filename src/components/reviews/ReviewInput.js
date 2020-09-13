import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
    restaurantId: ''
  }

  handleOnChange(event) {
    console.log('* handle change *', this.props.restaurant.id)
    this.setState({
      text: event.target.value,
      restaurantId: this.props.restaurant.id
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state.text, this.state.restaurantId);
    this.setState({
      text: '',
      restaurantId: this.props.restaurant.id
    });
  }

  render() {
    console.log('rendering review input', this.props, this.state)
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
