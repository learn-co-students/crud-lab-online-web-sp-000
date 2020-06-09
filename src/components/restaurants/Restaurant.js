import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

// add delete button
class Restaurant extends Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}>
            Delete
          </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
}

export default Restaurant;
