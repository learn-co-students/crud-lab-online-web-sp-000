import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({text:this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            name="review_input"
            value={this.state.text}
            onChange={this.handleOnChange}/>
          <input
            type="submit"
            value="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
