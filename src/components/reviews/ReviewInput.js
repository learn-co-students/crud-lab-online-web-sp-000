import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: '',
    });
  }

  render() {
    console.log('rendering review input', this.props, this.state)
    return (
      <div>
        <h4>Review Form</h4>
        <br></br>
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
