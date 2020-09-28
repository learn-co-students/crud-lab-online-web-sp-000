import React, { Component } from 'react';
import {connect} from 'react-redux'

class RestaurantInput extends Component {
state={
text:""


}
handleOnChange = (event) => {
this.setState({
  [event.target.name]: event.target.value


})


const handleSubmit = (event) => {
event.preventDefault()
this.props.restaurants(this.state.restaurants.id)
this.setState({
  text:""

})


}


}



  render() {
    return (
      <div>
      
        Restaurant Input

        <form onSubmit={this.handleSubmit}>
        <label> New Restaurant</label>
        <input text="" onChange={this.handleOnChange}/><br></br>
        <input/>




     


      </form>
      </div>
    );
  }
};

export default RestaurantInput;
