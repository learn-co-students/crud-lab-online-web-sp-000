import cuid from 'cuid';
// import { combineReducers } from 'redux';

export default function manageRestaurants(state = {
   restaurants: []
}, action) {
   switch (action.type) {
      case "ADD_RESTAURANT":
         // Update and return state
         const newRestaurant = {
            id: cuid(),
            text: action.text
         };
         return {
            ...state,
            restaurants: [...state.restaurants.concat([newRestaurant])]
         };
      case "DELETE_RESTAURANT":
         // Remove restaurant by id, return updated state
         return {
            ...state,
            restaurants: [
               ...state.restaurants.filter(restaurant => restaurant.id !== action.id)
            ]
         };
      default: 
         break;
   };
   return state;
}
