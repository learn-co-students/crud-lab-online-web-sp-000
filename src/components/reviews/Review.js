import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
// console.log(this.props.delete)
    return (
      <div>
        <li>
          {review.text}<button onClick={() => this.props.delete(review)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;

