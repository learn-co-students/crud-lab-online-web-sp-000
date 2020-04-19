import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state, "state")
    console.log(this.props, "props")
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input 
            type="text" 
            onChange={event => this.handleOnChange(event)}
          />
          <input 
            type="submit" 
            value="Add Review" 
          />
        </form>
        
      </div>
    );
  }
};

export default ReviewInput;
