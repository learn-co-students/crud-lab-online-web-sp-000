import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleClick = () => {
    this.props.delete(this.props.restaurant.id);
  }

  render() {

    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={restaurant} addReview={this.props.addReview} reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
