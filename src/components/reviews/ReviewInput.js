import React, { Component } from 'react';

class ReviewInput extends Component {

  //we are not using a constructor here because we aren't initializing a local state by assigning an object to this 

  state = {
      text: ''
    };
  
    handleOnChange = e => {
      this.setState({
        text: e.target.value,
      });
    }
  
    handleOnSubmit = e => {
      e.preventDefault();
      //add an id to associate review with restaurant
      this.props.addReview({ text: this.state.text,                     restaurantId: this.props.restaurantId });
      this.setState({
        text: '',
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <label>Add Review</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleOnChange}/>
            <input type="submit" />
          </form>
        </div>
      );
    }
  };

export default ReviewInput;
