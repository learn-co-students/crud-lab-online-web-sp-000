import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      restaurantId: null
    };
  }

  onChange = (event) => {
    console.log(this.props.restaurantId)
    this.setState({text: event.target.value, restaurantId: this.props.restaurantId})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({text: "", restaurantId: null});
  }

  render() {
    return (
      <div>
      <h1>Review this store</h1>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <input type="text" value={this.state.text} onChange={event => this.onChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
