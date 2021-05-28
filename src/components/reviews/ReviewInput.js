import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state= {
    text: "",
  }

  handelOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handelOnSubmit = e => {
    e.preventDefault();

   let review = {
    text: this.state.text,
    restaurantId: this.props.restaurantId
    }

    console.log(review)
    this.props.addReview(review)
  
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={e => this.handelOnSubmit(e)}>
          <input type="text" onChange={this.handelOnChange} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
