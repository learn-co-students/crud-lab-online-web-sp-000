import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  handleSubmit = () => this.props.addRestaurant(this.state)
  
  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(ReviewsContainer);
