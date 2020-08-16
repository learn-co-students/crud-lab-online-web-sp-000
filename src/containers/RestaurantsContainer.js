import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { addRestaurant } from '../actions/addRestaurant'
import { deleteRestaurant } from '../actions/deleteRestaurant'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})

const mapDispatchToProps = dispatch => ({
  addRestaurant: (name) => dispatch(addRestaurant(name)),
  deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
