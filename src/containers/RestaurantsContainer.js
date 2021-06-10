import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {addRestaurant, deleteRestaurant} from "../actions/Restaurant";
import { connect } from "react-redux"

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants })

export default connect(mapStateToProps, { addRestaurant, deleteRestaurant })(RestaurantsContainer);
