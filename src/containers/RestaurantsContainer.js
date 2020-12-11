import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete} reviews={this.props.reviews}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', name: text }),
  delete: restaurantId => dispatch({ type: 'DELETE_RESTAURANT', id: restaurantId })
})

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);