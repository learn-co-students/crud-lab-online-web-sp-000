import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRestaurant} from '../containers/RestaurantsContainer'

class RestaurantInput extends Component {
  constructor(){
    super()

    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.addRestaurant(this.state.name)

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>Name:</p>
          <input type='text' name={this.state.name} onChange={(event) => this.handleChange(event)}/><br></br>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default connect(null, {addRestaurant})(RestaurantInput);
