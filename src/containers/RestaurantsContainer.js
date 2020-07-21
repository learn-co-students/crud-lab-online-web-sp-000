import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";
class RestaurantsContainer extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => {
      return (
        <Restaurants
          restaurant={restaurant}
          key={restaurant.id}
          delete={this.props.delete}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <RestaurantInput add={this.props.add} />
        {this.renderRestaurants()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: restaurantInfo =>
      dispatch({ type: "ADD_RESTAURANT", text: restaurantInfo }),
    delete: resId => dispatch({ type: "DELETE_RESTAURANT", id: resId })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
