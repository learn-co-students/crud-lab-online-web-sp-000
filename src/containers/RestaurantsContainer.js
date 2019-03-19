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
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
    // restaurants: [...state.restaurants, { id: 1, text: "burger king" }]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text: text }),
    deleteRestaurant: restaurantID =>
      dispatch({ type: "DELETE_RESTAURANT", restaurantID: restaurantID })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
