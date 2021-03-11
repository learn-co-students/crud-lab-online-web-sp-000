import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }
  
  

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault(); 
    console.log(this.props.restaurantId)
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    }) 
  }

  render() {
    return (
      <div>
        {/* Review Input */}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit"/> 
        </form>

        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/> 
        {/* tried to add props to this Reviews component-- may be incorrect and is currently not working */}
      </div>
    );
  }
};

export default ReviewInput;
