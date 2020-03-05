import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews deleteReview = {this.props.deleteReview} reviews={this.props.reviews} restaurantId={this.props.restaurantId}/>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch =>{
   return{
     addReview: (text,restaurantId)=>dispatch({type:"ADD_REVIEW",text,restaurantId}),
     deleteReview: (id)=>dispatch({type:"DELETE_REVIEW", id})

   }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
