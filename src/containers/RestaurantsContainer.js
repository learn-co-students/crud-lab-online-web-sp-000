import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          bands={this.props.bands}
          deleteBand={this.props.deleteBand}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });

const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", name }),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
