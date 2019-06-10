import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  rhandleChange = (event) => {
    this.setState({
     text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} > 
          <input type="text" onChange={this.handleChange}value={this.state.text}/>
          
         
        </form>
        Restaurant Input
      </div>
    );
  }
};

export default ReviewInput;

