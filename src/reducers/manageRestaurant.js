import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {restaurants: [], reviews: []}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      return {reviews: [...state.reviews], restaurants: [...state.restaurants, {id: cuidFn(), text: action.restaurant}]};
    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(x => x.id !== action.id), reviews: [...state.reviews]}
      case 'ADD_REVIEW':
        return {restaurants: [...state.restaurants], reviews: [...state.reviews, {id: cuidFn(), text: action.review.text, restaurantId: action.review.restaurantId}]};
      case 'DELETE_REVIEW':
        return {reviews: state.reviews.filter(x => x.id !== action.id), restaurants: [...state.restaurants]}
    default:
      return state;
  }
}
