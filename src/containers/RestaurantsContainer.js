import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'
class RestaurantsContainer extends Component {
  render () {
    const { restaurants, addRestaurant, removeRestaurant } = this.props;

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants} removeRestaurant={removeRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = dispatch => {
  return { 
    addRestaurant: (text) => dispatch({type: 'ADD_RESTAURANT', text: text}),
    removeRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', payload: id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

// connect to Redux and pass the appropriate props down children.
// a Restaurants component that renders a list of restaurants
// a Restaurant component that is responsible for each individual restaurant. 