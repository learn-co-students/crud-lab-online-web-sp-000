import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { addReview, restaurantId } = this.props
    event.preventDefault()
    addReview(this.state.text, restaurantId)
    this.setState({
      text: ''
    })
  }



  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input name="name" type="text" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
