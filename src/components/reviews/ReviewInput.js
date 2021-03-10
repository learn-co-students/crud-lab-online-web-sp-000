import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        {/* Review Input */}
        <form onSubmit={this.props.addReview}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit"/> 
        </form>

        <Reviews/>
      </div>
    );
  }
};

export default ReviewInput;
