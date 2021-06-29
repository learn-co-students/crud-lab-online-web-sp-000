import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview,deleteReview} from '../actions/reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput  restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews deleteReview={this.props.deleteReview} restaurant={this.props.restaurant} reviews={this.props.reviews}/>
      </div>
    )
  }
}

/////////////////////////////////////////////

const mapStateToProps = state => {
  return {
    reviews: state.reviews 
  }
 
}


const mapDispatchToProps = {
  addReview: addReview,
  deleteReview:  deleteReview  
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer);



