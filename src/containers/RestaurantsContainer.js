import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'
import {addRestaurant} from '../components/actions/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants text={this.props.text}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    text: state.text
  })
}

const mapDispatchToProps = dispatch => {
  return({
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
  })
}



export default RestaurantsContainer

connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
