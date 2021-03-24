import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';
import { addRestaurant, deleteRestaurant } from '../actions/restaurants';

// will connect to Redux and pass appropriate props down to children

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
// map state and dispatch to props

// const mapDispatchToProps = dispatch => {
//    return {
//       addRestaurant: restaurant => 
//          dispatch({type: "ADD_RESTAURANT", text: restaurant}),

//       deleteRestaurant: restaurantId => 
//          dispatch({type: "DELETE_RESTAURANT", id: restaurantId})
//    }
// };

export default connect(
   (state) => ({ restaurants: state.restaurants }),
   { addRestaurant, deleteRestaurant }
)(RestaurantsContainer);
