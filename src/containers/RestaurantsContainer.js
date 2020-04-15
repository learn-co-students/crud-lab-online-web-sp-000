import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from "react-redux";

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={(text) => this.props.addRestaurant(text)}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={id => this.props.deleteRestaurant(id)}/>
        {this.props.restaurants.length}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurantName => dispatch({type:'ADD_RESTAURANT', text: restaurantName}),
    deleteRestaurant: restaurantId => {
      dispatch({type: 'DELETE_RESTAURANT', restaurantId: restaurantId});
    }
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
