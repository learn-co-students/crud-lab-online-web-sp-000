import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
     super(props);
     this.state = {
       text: ''
     };
   };

   handleOnChange = event => {
      this.setState({ text: event.target.value, });
    }

    handleSubmit = event => {
      event.preventDefault();
        this.props.addRestaurant(this.state.text)
        this.setState({text: '',})
      }

  render() {
    return(
      <div>
          <p>  Input Restaurant </p>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value ={this.state.text} onChange = {(event) => this.handleOnChange(event)} />
            <p>  {this.state.text}  </p>
         <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
