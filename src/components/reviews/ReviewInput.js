import React, { Component } from 'react';


class ReviewInput extends Component {
  

    state = {
      text: ''
    };


  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event =>{
    event.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review)
    this.setState(
      {
      text: ''
    })
  }
  

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}> 
          <label>Add A Review</label>
          <input type="text" onChange={event=>this.handleOnChange(event)} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
