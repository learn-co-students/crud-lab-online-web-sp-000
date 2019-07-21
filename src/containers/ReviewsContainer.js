import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  // COMMENT: The solution does not declare the state of reviews here, but I am not sure why not.
  // constructor(){
  //   super()
  //
  //   this.state = {
  //     reviews: []
  //   }
  // }

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

//write the dispatch methods to add/delete reviews here, whereas for restaurants we just passed down dispatch. I am assumming that we use these two different approaches to organize our code as restaurants vs reviews but am not quite sure.
const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: 'ADD_REVIEW', review}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
