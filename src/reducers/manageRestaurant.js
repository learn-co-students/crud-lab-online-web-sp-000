
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  let index;
  switch(action.type){
    case "ADD_RESTAURANT":
      const restaurant = { id: cuid(), text: action.text}
      return {...state, restaurants: [...state.restaurants, restaurant]}
    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(e => e.id !== action.id)
      return { restaurants }
    default:
      return state
  }
}
