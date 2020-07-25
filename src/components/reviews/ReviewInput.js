import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  textChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {   
    event.preventDefault();
    this.props.review({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ''
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Review</label>
          <input onChange={this.textChange} type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
