import React, { Component } from 'react';
//import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurant.id
    }
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Review Input' onChange={this.handleChange} name='text' value={this.state.text} />
          <input type='submit' value='Submit'/>
        </form>
        
      </div>
    );
  }
};

export default ReviewInput;
