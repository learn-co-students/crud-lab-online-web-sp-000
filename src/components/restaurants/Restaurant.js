import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          <h3>{restaurant.text}</h3>
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
