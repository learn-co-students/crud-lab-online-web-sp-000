import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    console.log(event)
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })

  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
        <input name='text' value={this.state.text} onChange={(event) => this.handleOnChange(event)}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
