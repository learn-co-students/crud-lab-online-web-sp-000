import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {this.props.text}
        </li>
        <button onClick={() => this.props.deleteReview(this.props.id, this.props.restaurantId)}> X </button>
        {/* <button onClick={() => this.props.deleteReview(this.props.id)}> X </button> */}
      </div>
    );
  }

};

export default Review;
