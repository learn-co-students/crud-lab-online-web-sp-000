import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return({
    addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', restaurant}),
    removeRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
