import cuid from "cuid";
export const cuidFn = cuid;

const defaultState = {
  restaurants: [],
  reviews: []
};

export default function manageRestaurants(state = defaultState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const resaurant = {
        id: cuid(),
        text: action.text
      };
      return {
        ...state,
        restaurants: [...state.restaurants, resaurant]
      };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(r => r.id !== action.id)
      };
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };
      return {
        ...state,
        reviews: [...state.reviews, review]
      };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      };
    default:
      return state;
  }
}
