import React from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

const Restaurant = props => (
	<li>
		{props.restaurant.text}{" "}
		<button onClick={() => props.deleteRestaurant(props.restaurant.id)}> X </button>
		<ReviewsContainer restaurantId={props.restaurant.id} />
	</li>
)

export default Restaurant
