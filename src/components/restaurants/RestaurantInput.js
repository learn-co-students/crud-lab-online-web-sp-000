import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

handleChange = event =>{
  this.setState(
    {
    text: event.target.value
  })
}

handleSubmit = event =>{
  event.preventDefault();
  this.props.addRestaurant(this.state.text)
  this.setState(
    {
    text: ''
  })
}



  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Restaurant Name</label>
          <input name="text" type="text" value={this.state.text} onChange={event=>this.handleChange(event)}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
