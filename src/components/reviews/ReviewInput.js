import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview(this.props.restaurantId, this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review: </label>
          <input
            type="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
