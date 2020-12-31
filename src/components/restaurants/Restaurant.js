import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          <h2>{restaurant.text} <button onClick={this.props.deleteRestaurant}>Delete</button></h2>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
