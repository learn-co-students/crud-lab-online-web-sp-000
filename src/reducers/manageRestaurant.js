import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  let idx;
  switch(action.type) {

    case 'ADD_RESTAURANT':
      return {...state, restaurants: [...state.restaurants, { text: action.rest, id: cuid() }]};

    case 'DELETE_RESTAURANT':
      idx = state.restaurants.findIndex(rest => rest.id === action.id);
      return {...state, restaurants: [...state.restaurants.slice(0, idx), ...state.restaurants.slice(idx + 1)] }

    case 'ADD_REVIEW':
      return {...state, reviews: [...state.reviews, { text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId }]};

    case 'DELETE_REVIEW':
      idx = state.reviews.findIndex(review => review.id === action.id);
      return {...state, reviews: [...state.reviews.slice(0, idx), ...state.reviews.slice(idx + 1)] };

    default:
      return state;
  }
}
