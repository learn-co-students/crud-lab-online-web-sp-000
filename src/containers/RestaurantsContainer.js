import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants}
        deleteRestaurant={this.props.deleteRestaurant}/>
      
        
      </div>
    )
  }
}

const msp = state => {
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', payload: restaurant}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', payload: id})

  }
  }


export default connect(msp, mapDispatchToProps)(RestaurantsContainer);
