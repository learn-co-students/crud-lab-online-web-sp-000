import React, { Component } from "react";

class Review extends Component {

  handleClick = event => {
    this.props.delete(this.props.review.id)
  }

  render() {
    const { review } = this.props;

    return (
      <li>
        {review.text}
        <button onClick={this.handleClick}> X </button>
      </li>
    );
  }
}

export default Review;
