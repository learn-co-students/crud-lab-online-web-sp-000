import React from "react";
import Review from "./Review";

const Reviews = props => (
	<ul>
		{props.reviews.map(review => <Review key={review.id} deleteReview={props.deleteReview} review={review} />)}
	</ul>
)

export default Reviews
