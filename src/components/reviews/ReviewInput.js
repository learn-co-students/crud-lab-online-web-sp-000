import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let revObj = {
      text: this.state.text,
      restaurantId: this.props.restaurant.id 

    }
    
    this.props.addReview(revObj);

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review Text:</label>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
            
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
