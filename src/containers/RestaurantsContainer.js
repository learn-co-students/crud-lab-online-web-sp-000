import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}  />
        <Restaurants restaurants={this.props.restraurants} deleteRestaurant={this.props.delete} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: text => dispatch({type: 'DELETE_RESTAURANT', payload: text }),
    addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', payload: text })
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

// export default RestaurantsContainer


