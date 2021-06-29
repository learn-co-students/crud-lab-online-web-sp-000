 import cuid from 'cuid';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurants,
  reviews
});

function restaurants(state = [], action) {
   switch (action.type){
   case 'ADD_RESTAURANT':
    let  restaurant = {
      id: cuid(),
      text: action.text,
    }

    return state.concat(restaurant) ;

    case 'DELETE_RESTAURANT':
      return  state.filter(restaurant => restaurant.id !== action.id) 
   
     default:
        return state;
    }

}

function reviews(state = [], action) {
   switch (action.type){
   case 'ADD_REVIEW':
    let  review = {
      id: cuid(),
      text: action.review.text,
      restaurantId: action.review.restaurantId 
    }

    return state.concat(review) ;

    case 'DELETE_REVIEW':
      return  state.filter(review => review.id !== action.id) 
   
     default:
        return state;
    }

}

 

export default rootReducer
