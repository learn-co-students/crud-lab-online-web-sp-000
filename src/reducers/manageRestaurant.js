import cuid from 'cuid';
// import { combineReducers } from 'redux';

export default function manageRestaurants(state = {
   restaurants: []
}, action) {
   switch (action.type) {
      case "ADD_RESTAURANT":
         // Update and return state
         console.log('state:', state, 'action:', action)
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
         console.log('state:', state, 'action:', action)
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
