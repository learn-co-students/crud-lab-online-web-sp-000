import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';
import {addRestaurant} from '../actions/restaurants.js'
import {deleteRestaurant} from '../actions/restaurants.js'


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput restaurants={this.props.restaurants} addRestaurant={this.props.addRestaurant}/>
        <Restaurants /*restaurants={this.props.restaurants}*/ deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addRestaurant: restaurant => dispatch(addRestaurant(restaurant)),
    deleteRestaurant: restaurantId => dispatch(deleteRestaurant(restaurantId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantsContainer);
