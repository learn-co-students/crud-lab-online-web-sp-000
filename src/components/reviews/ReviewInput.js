import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: "",
    restaurantId: this.props.restaurantId
  }

  handleOnChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: "",
      restaurantId: this.props.restaurantId
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
