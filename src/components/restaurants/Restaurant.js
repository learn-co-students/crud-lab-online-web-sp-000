import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import Restaurants from './Restaurants';

class Restaurant extends Component {


  render() {
    const { restaurant, id, delRest} = this.props;

    return (
      <div>
        <li key={id}>
          {restaurant.text}
          <button onClick={() => delRest(id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
