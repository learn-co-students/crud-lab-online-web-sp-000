import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import cuid from 'cuid';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li id={restaurant.id}>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
