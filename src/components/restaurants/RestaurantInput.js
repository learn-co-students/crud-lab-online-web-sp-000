import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState ({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text:''
    })

  }

  render() {
    return (
      <div>
        Add your Restaurant!
        <form onSubmit={this.handleOnSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.text}   
          />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
