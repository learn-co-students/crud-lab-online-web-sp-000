import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantInput extends Component {

  state = {text: ''}

  handleChange = event => {
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_RESTAURANT', payload: this.state });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        Restaurant Input
          <input type='text' value={this.state.text} onChange={event => this.handleChange(event)}/>
        </form>
      </div>
    );
  }
};


export default connect(null, null)(RestaurantInput);
//export default (RestaurantInput);




// render() {
//   return (
//     <div>
//       <form>
//         <p>
//           <label>Reastaurant</label>
//           <input type="text"/>
//         </p>
//         <input type="submit"/>
//       </form>
//     </div>
//   );
// }
// };
