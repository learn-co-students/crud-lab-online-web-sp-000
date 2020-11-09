import React, { Component } from 'react';
import RestaurantsContainer from './containers/RestaurantsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        { console.log('app.js')}
        <RestaurantsContainer />
      </div>
    );
  }
};

export default App;
