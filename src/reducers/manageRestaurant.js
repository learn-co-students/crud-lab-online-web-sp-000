import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRest = { text: action.text, id: cuid() };
      return [...state, newRest] ;
    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(r => r.id !== action.restaurantID)
      };
    default:
      return state;
  }
}
