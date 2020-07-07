import React, { Component } from 'react';
import RestaurantsContainer from './containers/RestaurantsContainer';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantsContainer />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return state
};
 
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
//   };
// };
 
export default connect(
  mapStateToProps
)(App);

// export default App
