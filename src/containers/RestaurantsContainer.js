import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={ this.props.restaurants } delete={this.props.delete} reviews={this.props.reviews} addReview={this.props.addReview} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text: text }),
    delete: id => dispatch({type: 'DELETE_RESTAURANT', id: id}),
    addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', text: text, restaurantId: restaurantId}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id: id})
  }
}

export default connect(state => ({ restaurants: state.restaurants, reviews: state.reviews }), mapDispatchToProps)(RestaurantsContainer);
