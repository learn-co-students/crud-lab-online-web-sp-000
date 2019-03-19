import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRest = { text: action.text, id: cuid() };
      return { restaurants: [...state.restaurants, newRest] };
    case "DELETE_RESTAURANT":
    break
    default:
      return state;
  }
}
