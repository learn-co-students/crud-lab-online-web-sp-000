import uuid from 'uuid';
import cuid from 'cuid';
export const cuidFn = cuid;


export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: uuid(),
        text: action.text
      }
      return { ...state, restaurants: [...state.restaurants, restaurant] };

    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.id) }

    case 'ADD_REVIEW':
      const review = {
        id: uuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
      return { ...state, reviews: [...state.reviews, review]}

    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter(r => r.id !== action.id) }

    default:
      return state;
  }
}
