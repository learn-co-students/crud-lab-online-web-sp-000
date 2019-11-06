import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
// kad brisem Rest -> TypeError: Cannot read property 'filter' of undefined
//        updates the state of the store to remove the component
    const associatedReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );

    const renderReviews = associatedReviews.map((r) => {return <Review key={r.id} review={r} deleteReview={this.props.deleteReview}/>})



    return (
      <div>{renderReviews}</div>
    );
  }
};

export default Reviews;
