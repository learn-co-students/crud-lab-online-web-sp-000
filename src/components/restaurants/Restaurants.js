import React, { Component } from 'react';
import Restaurant from "./Restaurant";

class Restaurants extends Component {

  renderRest() {
    return this.props.restaurants
        .map( (e, idx) => <Restaurant key={idx}
                                      restaurant={e}
                                      deleteRestaurant={this.props.deleteRestaurant}/>
        )
  }

  render() {
    return(
      <ul>
        {this.renderRest()}
      </ul>
    );
  }
}

export default Restaurants;