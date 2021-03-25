import cuid from 'cuid';
// import { combineReducers } from 'redux';

export default function manageRestaurants(state = {
   restaurants: [],
   reviews: []
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
         // Remove restaurant and associated reviews by id, return updated state
         return {
            ...state,
            restaurants: [
               ...state.restaurants.filter(restaurant => restaurant.id !== action.id)
            ],
            reviews: [
               ...state.reviews.filter(review => review.restaurantId !== action.id)
            ]
         };
      case "ADD_REVIEW":
         // Add review to associated restaurants reviews
         const newReview = {
            id: cuid(),
            text: action.review.text,
            restaurantId: action.review.restaurantId
         };
         // return updated state
         return {
            ...state,
            reviews: [...state.reviews.concat([newReview])]
         };
      case "DELETE_REVIEW":
         // delete review associated with restaurant
         return {
            ...state,
            reviews: [
               ...state.reviews.filter(review => review.id !== action.id)
            ]
         }
      default: 
         break;
   };
   return state;
}
