import React, { Component } from 'react';

class RestaurantInput extends Component {
    state = {
      text: ''
    }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    const {text} = this.state;

    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <input type="text" onChange={this.handleChange} value={text} />
         <input type="submit" value="Add Restuarant" />
       </form>
      </div>
    );
  }
};

export default RestaurantInput;
