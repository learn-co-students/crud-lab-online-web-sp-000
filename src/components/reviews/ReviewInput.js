import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleChange = event => {
    const val = event.target.value
    console.log(`updating state to ${val}`)
    this.setState({
      text: val
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = {
      restaurantId: this.props.restaurantId,
      text: this.state.text
    }
    console.log(`submitting review with data ${Object.keys(formData)}`)
    this.props.addReview(formData)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
