import React, { Component } from 'react';
//import { connect } from 'react-redux'
import cuid from 'cuid';

class RestaurantInput extends Component {

state= {
  text: ""
}

handelOnChange = (e) => {
 this.setState({
   [e.target.name]: e.target.value
 })
}

handelOnSubmit = (event) => {
event.preventDefault()
let restaurant = {
  text: this.state.text,
  id: cuid()
}
this.props.addRestaurant(restaurant);
this.setState({
  text: ""
})
}

  render() {
    return (
      <div>
        Restaurant Input
        <br/>
        <form onSubmit={event => this.handelOnSubmit(event)}>
          <input type="text" name="text" onChange={this.handelOnChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};




export default RestaurantInput;
