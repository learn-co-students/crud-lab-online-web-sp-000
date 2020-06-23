import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {

    const {restaurants, reviews, addRestaurant, addReview, deleteRestaurant, deleteReview} = this.props

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants restaurants={restaurants} reviews={reviews} 
        addReview={addReview} deleteRestaurant={deleteRestaurant}
        deleteReview={deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews 
  }
}


const mapDispatchToProps = dispatch => ({
  addRestaurant: formData => dispatch({type:'ADD_RESTAURANT', text: formData}),
  addReview: formData => dispatch({type:'ADD_REVIEW', text: formData}),
  // I changed the above keys to "text" from "payload" to pass the tests
  deleteRestaurant: id => dispatch({type:'DELETE_RESTAURANT', payload: id}),
  deleteReview: id => dispatch({type:'DELETE_REVIEW', payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

