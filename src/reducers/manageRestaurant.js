
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const rest = {
        id: cuid(),
        text: action.name,
        reviews: []
      }
      return {...state, restaurants: [...state.restaurants, rest] }


      case 'DELETE_RESTAURANT':

      return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id)}

      case 'ADD_REVIEW':

        return {...state, reviews: [...state.reviews, action.review]}

      case 'DELETE_REVIEW':
        return {...state, reviews: state.reviews.filter(review => review !== action.review)}
    default:
      return state;
  }
}
