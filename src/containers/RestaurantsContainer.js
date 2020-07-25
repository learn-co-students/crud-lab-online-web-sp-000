import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
   
    return (
      <div>
        <RestaurantInput add={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text}),
    delete: restaurant => dispatch({type: 'DELETE_RESTAURANT', restaurant})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
