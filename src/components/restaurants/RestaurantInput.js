import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
         >
          <input 
            type="text"
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
