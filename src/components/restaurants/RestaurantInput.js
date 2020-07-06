import React, { Component } from 'react';


class RestaurantInput extends Component {
  
  state = {
    text: ""
  }

  handleChange = event => {
    const val = event.target.value
    console.log(`updating RestaurantInput state to ${val}`)
    this.setState({
      text: val
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({ text:"" })
  }
  
  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
        <p>
          <input 
            type='text' 
            onChange={this.handleChange} 
            value={this.state.text}
          />           
        </p>
        <input type='submit' />
      </form>
    )
  }
};

export default RestaurantInput;
