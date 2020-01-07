import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  onChangeHandler = event => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmitHandler = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.onSubmitHandler}>
          <input value={this.state.text} name="text" id="name" type="text" onChange={this.onChangeHandler} />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;


// RestaurantInput
//     1) has an text input field
//     2) has an initial state with text key set to empty string
//     3) changes the state with an onChange event
//     4) updates the state of the store after submitting the form
