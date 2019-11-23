import React from "react";
import { connect } from "react-redux";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";

const RestaurantsContainer = props => (
	<div>
		<RestaurantInput addRestaurant={props.addRestaurant} />
		<Restaurants deleteRestaurant={props.deleteRestaurant} restaurants={props.restaurants} />
	</div>
)

const mapStateToProps = ({restaurants}) => ({restaurants}) 

const mapDispatchToProps = dispatch => ({
	addRestaurant: text => dispatch({type: "ADD_RESTAURANT", text}),
	deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
