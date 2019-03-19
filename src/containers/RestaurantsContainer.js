import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput
          handleSubmit={this.handleSubmit}
          addRestaurant={this.props.addRestaurant}
        />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
    // restaurants: [...state.restaurants, { id: 1, name: "burger king" }]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", name: name }),
    deleteRestaurant: restaurantID =>
      dispatch({ type: "DELETE_RESTAURANT", restaurantID: restaurantID })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
