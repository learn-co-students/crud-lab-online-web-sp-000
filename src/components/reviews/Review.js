import React, { Component } from 'react'

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props

    return (
      <div>
        <li>
          {review.text}&nbsp;
          <button onClick={() => deleteReview(review.id)}> X </button>
        </li><br/>
      </div>
    )
  }

}

export default Review
