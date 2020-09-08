import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux';

class RestaurantsContainer extends Component {

  handleRestaurantDelete = (id) => {
    this.props.deleteRestaurant(id)
  }

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants deleteRestaurant={this.handleRestaurantDelete} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (state) => dispatch({type: 'ADD_RESTAURANT', text: state.text}),
    deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id})
  };
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
