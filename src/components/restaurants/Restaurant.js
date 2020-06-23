import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    
    const { restaurant, reviews, deleteRestaurant, addReview, deleteReview } = this.props;

    return (
      <div>
        <li>
          <h2>{restaurant.text}</h2>
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} reviews={reviews}
          addReview={addReview} deleteReview={deleteReview}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
