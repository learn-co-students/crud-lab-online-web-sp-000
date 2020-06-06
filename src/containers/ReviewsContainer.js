import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     reviews: state.restaurants
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   addRestaurant: name => dispatch({type: "ADD_RESTAURANT", name}),
//   deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id: id})
// })
export default ReviewsContainer
//export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
