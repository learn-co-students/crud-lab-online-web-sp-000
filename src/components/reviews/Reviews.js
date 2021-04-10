import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    const relatedReviews = reviews.filter(rev => rev.restaurantId === restaurantId)
    return (
      <div>
        <h3>Reviews</h3>
        <ul>
          {relatedReviews.map(rev => {
            return (
              <Review
                key={rev.id}
                review={rev}
                deleteReview={deleteReview} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Reviews
