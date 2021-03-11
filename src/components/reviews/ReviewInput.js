import React, { Component } from 'react';
// import Reviews from './Reviews';

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

    let review = {
      text: this.state.text, 
      restaurantId: this.props.restaurantId
    }
  
    this.props.addReview(review) //, this.props.restaurantId
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
        {/* <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId} /> */}
      </div>
    );
  }
};

export default ReviewInput;
