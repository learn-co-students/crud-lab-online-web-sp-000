
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        name: action.name,
        id: cuid()
      }
      return { restaurants: state.restaurants.concat(restaurant) };
      
    default:
      return state;
  }
}
