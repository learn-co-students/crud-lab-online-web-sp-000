import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from "react-redux";

class RestaurantsContainer extends Component {


  render() {
    return (
      <div>
        <RestaurantInput handleSubmit={this.handleSubmit} addRestaurant={this.props.addRestaurant}/>
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch({ type: 'ADD_RESTAURANT', restaurant: restaurant}),
    deleteRestaurant: restaurantID => dispatch({ type: 'DELETE_RESTAURANT', restaurantID: restaurantID}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
