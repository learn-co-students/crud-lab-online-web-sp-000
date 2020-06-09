import React, { Component } from 'react';


class ReviewInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }
  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      restaurantId: this.props.restaurantId,
      text: this.state.text
    }
    this.props.addReview(review)
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>New Review: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
