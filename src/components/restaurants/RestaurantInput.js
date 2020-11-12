import React, { Component } from 'react';

class RestaurantInput extends Component {

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
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
    
        <form onSubmit={this.handleSubmit}>
          <label>enter name</label>
          <input
              onChange={this.handleChange} 
              type="text"
              name="text"
              value={this.state.text}
              placeholder="my fav restaurant">
          </input>
          <input type="submit"/>
          
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
