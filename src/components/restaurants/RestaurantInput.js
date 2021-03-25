import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
     text: ''
  };

  handleOnChange = event => {
     this.setState({
        text: event.target.value
     });
  }

  handleOnSubmit = event => {
     event.preventDefault();

     // update state of the store 
     this.props.addRestaurant(this.state.text)

     // reset local state
     this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        Restaurant Input
        {/* 1) has an text input field
            2) has an initial state with text key set to empty string
            3) changes the component state with an onChange event
            4) updates the state of the store after submitting the form */}
         <form className="restaurant-form" onSubmit={this.handleOnSubmit}>
            <label>Add Restaurant</label>
            <input type="text" onChange={this.handleOnChange} value={this.state.text} />
            <br />
            <input type="submit" />
         </form>
         {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
