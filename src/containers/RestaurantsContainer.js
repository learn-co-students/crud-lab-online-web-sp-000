import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants deleteRestaurant = {this.props.deleteRestaurant} restaurants = {this.props.restaurants} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}
const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", name}),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id }),
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantsContainer);
