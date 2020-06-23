import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value 
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant({
      id: cuid(),
      ...this.state
    })
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <h2>Add a New Restaurant:</h2>
        {/* Using h3 tag to title--might throw off tests */}
        <form onSubmit={this.handleOnSubmit}> 
          <input type='text' onChange={this.handleOnChange} 
          value={this.state.text}/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
