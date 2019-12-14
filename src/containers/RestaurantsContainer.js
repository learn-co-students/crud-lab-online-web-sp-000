import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";
import { addRestaurant, deleteRestaurant } from "../actions/actionCreators";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

const actionCreators = {
  addRestaurant,
  deleteRestaurant
};

export default connect(mapStateToProps, actionCreators)(RestaurantsContainer);
