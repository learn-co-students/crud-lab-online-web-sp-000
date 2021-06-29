import React, { Component } from 'react';


class RestaurantInput extends Component {
  
  state = {
    text: ""
  }

  onchangeHandle = (e)=>{
     this.setState({
       text: e.target.value
     })
  }
  onSubmitHadle = (e) => { 
    e.preventDefault()

    const restaurant = this.state;
      this.props.addRestaurant(restaurant.text);
      this.setState({
        text: '',
      });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.onSubmitHadle }>
          <label>Enter restaurant:</label>
           <input type='text' onChange={this.onchangeHandle}   value={this.state.text}/>
           <input type='submit'/>
        </form>
      </div>
    );
  }
};

 export default RestaurantInput;

