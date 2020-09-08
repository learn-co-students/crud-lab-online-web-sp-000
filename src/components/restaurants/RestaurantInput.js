import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Restaurant Name:</label>
          <input type="text" onChange={this.handleInputChange} value={this.state.text}/>
          <br />
          <input type="submit" value="Save"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
