import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant</label>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

  const mapDispatchToProps = dispatch => ({
    addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text})
  })

export default connect(null, mapDispatchToProps)(RestaurantInput);
