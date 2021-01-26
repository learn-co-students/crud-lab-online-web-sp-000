import React, { Component } from 'react';

class Review extends Component {
  

      handleClick = (e)=>{
      const { review, removeReview } = this.props;
      e.preventDefault()
      removeReview(review.id)
    }

  render() {
   
    const { review, removeReview } = this.props;
    return (
      <div>
        <li>
          {review.text}
        </li>
        {/* <button onClick = {()=>{removeReview(review.id)}}> X </button> */}
        <button onClick = {this.handleClick}> X </button>

      </div>
    );
  }

};

export default Review;
