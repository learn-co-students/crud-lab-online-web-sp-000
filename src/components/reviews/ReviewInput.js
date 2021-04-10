import React, { Component } from 'react'
// import Reviews from './Reviews'

class ReviewInput extends Component {

  state = { text: '' }

  handleOnChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="review"><b>Write A Review </b></label>
          <input
            type="text"
            name='review'
            onChange={this.handleOnChange}
            value={this.state.text} />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default ReviewInput
