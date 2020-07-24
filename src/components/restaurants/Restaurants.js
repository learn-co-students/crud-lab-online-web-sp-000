import React, { Component } from 'react';

class Restaurants extends Component {
  renderTexts = () => {
    // console.log(this.props)

    this.props.texts.map((text) => console.log(text))
    //  /<Restaurant text={this.text}/>)
  }

  render() {
    return(
      <ul>
        Restaurants Component
        <div>{this.renderTexts}</div>
      </ul>
    );
  }
};

export default Restaurants;