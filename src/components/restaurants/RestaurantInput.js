import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;


// component that allows a user to create new restaurants. 
// form should have two inputs: 
  //   a text input to enter the name of the restaraunt, and
  //  an input with type equal submit

  // RestaurantInput
  //   ✓ has an text input field
  //   ✓ has an initial state with text key set to empty string
  //   ✓ changes the component state with an onChange event
  //   ✓ updates the state of the store after submitting the form 