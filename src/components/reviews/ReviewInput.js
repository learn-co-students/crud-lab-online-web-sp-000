import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const text = this.state.text;
    const restaurantId = this.props.restaurantId;
    console.log(`in ReviewInput, id is ${restaurantId}`);
    const review = { text, restaurantId };
    this.props.addReview(review);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
          ></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
