import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import { addRestaurant, removeRestaurant, updateRestaurant } from '../actions/restaurants'

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props, this.state)
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    restaurants: state.restaurants
  })
}

export default connect(mapStateToProps, { addRestaurant, removeRestaurant, updateRestaurant })(RestaurantsContainer)
