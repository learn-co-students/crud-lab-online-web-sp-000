import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
     super(props);
     this.state = {
       text: ''
     };
   };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
     this.setState({text: '',})
   }

  render() {
    return (
      <div>
          <p>  Input Review </p>

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange = {(event) => this.handleOnChange(event)} />
            <p>  {this.state.text}   </p>
         <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
