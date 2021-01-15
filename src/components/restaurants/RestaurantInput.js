import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  };
  
  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <p>
            <label>Add Restaurant Here --></label>
            <input 
              type="text" 
              onChange={event => this.handleOnChange(event)}
              value={this.state.text}
            />
            <input type="submit"/>
          </p>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
