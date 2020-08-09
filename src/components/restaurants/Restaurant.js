import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          <h1>{restaurant.text}</h1>
          <button onClick={()=> this.handleOnClick()}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
