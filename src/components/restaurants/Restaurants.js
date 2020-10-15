import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.allRests.map((restObj) => (
          <Restaurant restaurant={restObj} id={restObj.id} delRest={this.props.delRest} />
        ))}
      </ul>
    );
  }
};

export default Restaurants;