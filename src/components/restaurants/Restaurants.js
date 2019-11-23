import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = props => (
	<ul>
		{props.restaurants.map(restaurant => <Restaurant key={restaurant.id} deleteRestaurant={props.deleteRestaurant} restaurant={restaurant} />)}
	</ul>
)

export default Restaurants
