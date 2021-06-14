import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <RestaurantInput dispatch={this.props.addItem}/>
        <Restaurants restaurants={this.props.restaurants} dispatchDelete={this.props.deleteItem}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addItem: (itemText) => {
        dispatch({
          type: "ADD_RESTAURANT",
          text: itemText,
        });
      },
      deleteItem: (id) => {
        dispatch({
          type: 'DELETE_RESTAURANT',
          id: id
        })
      }
    };
  };

// export default RestaurantsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
