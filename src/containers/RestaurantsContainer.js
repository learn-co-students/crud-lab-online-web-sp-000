import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add={this.props.addRestaurant} />
        <Restaurants texts={this.props.texts} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.restaurants)
  return  {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text: text})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
