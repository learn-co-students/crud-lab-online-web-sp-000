// import cuid from 'cuid';


// export default function manageRestaurants(state = {
//     restaurants: []
// }, action) {
//   switch(action.type) {
//       case 'ADD_RESTAURANT':
//           const restaurant = {
//               id: cuid(),
//               text: action.text
//           }
//           return {...state, restaurants: [...state.restaurants, restaurant]};
    
//       case 'DELETE_RESTAURANT':
//           return {...state, restaurants: state.restaurants.filter(r => r.id !== action.id)};

//       default:
//           return state;
//   };
// } 

import cuid from 'cuid';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
})

export default rootReducer;

function restaurantsReducer(state = [], action) {
  switch(action.type) {
      case 'ADD_RESTAURANT':
          const restaurant = {
              id: cuid(),
              text: action.text
          }
          return [...state, restaurant];
    
      case 'DELETE_RESTAURANT':
          return state.filter(r => r.id !== action.id);

      default:
          return state;
  };
};

function reviewsReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_REVIEW':
            const review = {
               id: cuid(),
               text: action.review.text,
               restaurantId: action.review.restaurantId
            }

            return [...state, review];

        case 'DELETE_REVIEW':
            return state.filter(review => review.id !== action.review.id)

        default:
            return state;
    };
};