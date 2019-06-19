import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      return { restaurants: state.restaurants.concat({text: action.text, id: cuidFn()}) };
    case 'DELETE_RESTAURANT':
      return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) };
    case 'ADD_REVIEW':
      return { reviews: state.reviews.concat({ text: action.text, restaurantId: action.id, id: cuidFn() }) };
    default:
      return state;
  }
}
