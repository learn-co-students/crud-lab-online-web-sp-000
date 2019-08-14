import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <h2>Add a new restaurant</h2>
        <form onSubmit={(event)=> this.handleOnSubmit(event)}>
          <input
            placeholder="Restaurant name"
            type="text"
            value={this.state.text}
            onChange={(event)=> this.handleOnChange(event)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
