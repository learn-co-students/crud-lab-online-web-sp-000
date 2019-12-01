import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

const Restaurant = () => {

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
};

export default Restaurant;
          //
          // {restaurant.name}
          // <button> X </button>
          // <ReviewsContainer restaurant={restaurant}/>
