import { combineReducers } from 'redux';

const manageRestaurants = combineReducers({
    restaurants,
    reviews
  });
   
  export default manageRestaurants;

  function restaurants(state = [], action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
          //console.log(state)
          return  [...state, action.restaurant];
        case 'DELETE_RESTAURANT':
          //console.log(action)
          return state.filter(restaurant => restaurant.id !== action.id)
      
        default:
          return state;
      }
}

function reviews(state = [], action) {
    switch (action.type) {
        case 'ADD_REVIEW':
          //console.log(state)
          return  [...state, action.review];
        case 'DELETE_REVIEW':
          //console.log(action)
          
          return state.filter(reviews => reviews.id !== action.id)
      
        default:
          return state;
      }
}