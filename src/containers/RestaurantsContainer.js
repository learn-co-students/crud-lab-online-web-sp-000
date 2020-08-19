import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} delete={this.props.delete} />
        <Restaurants restaurants={this.props.restraurants} />
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
    delete: text => dispatch({type: 'DELETE_RESTAURANT', payload: text }),
    addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', payload: text })
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

// export default RestaurantsContainer


