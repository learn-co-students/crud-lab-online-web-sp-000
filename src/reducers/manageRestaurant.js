import cuid from "cuid";

export default function manageRestaurant(
  state = {
    restaurants: [],
    reviews: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      let id = cuid();
      // debugger
      return {
        ...state,
        restaurants: [...state.restaurants, { id: id, text: action.text }],
      };

    default:
      return state;
  }
}
