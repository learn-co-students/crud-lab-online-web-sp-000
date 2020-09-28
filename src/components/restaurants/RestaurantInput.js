import React, { Component } from 'react';


class RestaurantInput extends Component {
state= {
text:""

}
handleOnChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })

 }

handleSubmit = (event) => {
  event.preventDefault()
 this.props.addRestaurant(this.state.text)
  this.setState({
    text:""
  })


}

  render() {
    return (
      <div>
      
        Restaurant Input

        <form onSubmit={this.handleSubmit}>
        <label> New Restaurant</label>
        <input text="" onChange={this.handleOnChange}/><br></br>
        <input type="submit"/>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
