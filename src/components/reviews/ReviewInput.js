import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantId: "",
    id: ""
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.props)
    let review = {};
    review.text = this.state.text 
    review.restaurantId = this.props.restaurantId
    this.props.addReview(review);

    this.setState({
      text: "",
      restaurantId: "",
      id: ""
    })
  }
  
  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
          <label htmlFor="name">Review</label>
          <input 
            name="text"
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
