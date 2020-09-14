import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'


class RestaurantsContainer extends Component {

  render() {
    console.log('restaurant container', this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} reviews={this.props.reviews} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants, reviews: state.reviews })
const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id}),
  addReview: (text, restaurantId) => dispatch({ type: "ADD_REVIEW", text, restaurantId }),
  deleteReview: (id) => dispatch({ type: "DELETE_REVIEW", id }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
