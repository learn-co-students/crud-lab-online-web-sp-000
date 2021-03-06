import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor () {
    super()
    this.state = { text: '' }
  }

  handleChange = (event) => { this.setState({ text: event.target.value }) }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  } 

  render() {
    return (
        <form onSubmit={this.handleSubmit} >
          <input 
            type='text'
            name='text'
            onChange={event => this.handleChange(event)} 
            value={this.state.text}
            />
          <input type={'submit'} />

        </form>
    );
  }
};

export default RestaurantInput;