import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {
  render () {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    )
  }
}

const msp = state => ({ restaurants: state.restaurants })
const mdp = d => ({
  addRestaurant: text => d({ type: 'ADD_RESTAURANT', text }),
  deleteRestaurant: id => d({ type: 'DELETE_RESTAURANT', id })
})

export default connect(msp, mdp)(RestaurantsContainer)
