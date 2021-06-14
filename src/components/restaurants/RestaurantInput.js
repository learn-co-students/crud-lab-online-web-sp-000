import React, { Component } from "react";
import { connect } from "react-redux";

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.text);
    // this.props.dispatch({
    //   type: "ADD_RESTAURANT",
    //   text: this.state.text,
    // });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      // <div>
      //   Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
      // </div>
    );
  }
}

// export default RestaurantInput;

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemText) => {
      dispatch({
        type: "ADD_RESTAURANT",
        text: itemText,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(RestaurantInput);
// export default connect(null)(RestaurantInput);
