import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        {this.props.review.text}<button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
