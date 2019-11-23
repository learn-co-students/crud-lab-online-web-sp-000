import React from "react";
import { connect } from "react-redux";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

const ReviewsContainer = props => {
	const filteredReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId)
	
	return (
		<div>
			<ReviewInput addReview={props.addReview} restaurantId={props.restaurantId} />
			<Reviews deleteReview={props.deleteReview} reviews={filteredReviews} />
		</div>
	)
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
	addReview: review => dispatch({type: "ADD_REVIEW", review}),
	deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
