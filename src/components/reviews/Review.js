import React from "react"

const Review = props => (
	<li>
		{props.review.text}{" "}
		<button onClick={() => props.deleteReview(props.review.id)}> X </button>
	</li>
)

export default Review
