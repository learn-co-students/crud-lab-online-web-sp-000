import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  render() {
    const { restaurant } = this.props;
 
    return (
      <div>
        <li>
          {restaurant.text}
          <input
            type="button"
            onClick={()=> this.props.delete(this.props.restaurant.id)}
            value="Delete Restaurant"
          />
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
