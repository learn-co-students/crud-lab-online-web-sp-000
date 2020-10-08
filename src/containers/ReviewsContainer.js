import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import Restaurant from '../components/restaurants/Restaurant';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    console.log("REVIEWS CONTAINER",this.props)
    return (
      <div>
      
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} delete={this.props.delete} restaurant={this.props.restaurant}/>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({reviews: state.reviews})


const mapDispatchToProps = dispatch => ({

addReview: review => dispatch({type:'ADD_REVIEW',review}),
delete: id => dispatch ({type: 'DELETE_REVIEW',id})

})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
