import React, { Component } from 'react';
import {connect} from 'react-redux';

class RestaurantInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleOnSubmit(event) {
      event.preventDefault();
      this.props.addRestaurant(this.state.text);
      this.setState({
        text: ''
      })
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

render() {
  return (
    <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          value={
            this.state.text
          }
          onChange={
            (event) => this.handleOnChange(event)
          }
        />
        <input type="submit" />
      </form>
    </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({type: "ADD_RESTAURANT", name})
})

export default connect(null, mapDispatchToProps)(RestaurantInput);
