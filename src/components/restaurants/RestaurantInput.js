import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Restaurant Name</label>
          <input 
            name="name"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
