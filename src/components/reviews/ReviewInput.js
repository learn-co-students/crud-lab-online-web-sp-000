import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId} )
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        {/* <button onClick={()=>console.log(this.props.restaurantId)}>rest id</button> */}
    
        <form onSubmit={this.handleSubmit}>
          <input
              onChange={this.handleChange} 
              type="text"
              name="text"
              value={this.state.text}
              placeholder="add review here">
          </input>
          <input type="submit"/>
          
        </form>
      </div>
    );
  }
};


export default ReviewInput;
