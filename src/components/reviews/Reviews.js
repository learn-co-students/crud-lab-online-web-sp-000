import React, { Component } from 'react';
import Review from './Review';
//
// const Reviews = props => {
//
// const reviews =
// props.reviews.map(review => <Review
//   key={review.id}
//   deleteReview={props.deleteReview}
//   text={review.text}/>)
//
//   const associatedReviews = props.reviews.filter(review => review.restaurantId === restaurantId);
//
//   const reviewList = associatedReviews.map((review, index) => {
//     return <Review key={index} review={review} deleteReview={deleteReview} />
//   })
//
//     return (
//         <div>
//           <ul>
//           { reviews }
//         </ul>
//         </div>
//       );
//   };
//
// export default Reviews;
class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const ownReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const reviewList = ownReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} /> })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;
