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
      return {
        ...state,
        restaurants: [...state.restaurants, { id: id, text: action.text }],
      };

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter((rest) => rest.id !== action.id),
      };

    case "ADD_REVIEW":
      let reviewId = cuid();
      return {
        ...state,
        reviews: [
          ...state.reviews,
          {
            id: reviewId,
            text: action.review.text,
            restaurantId: action.review.restaurantId,
          },
        ],
      };

    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      };

    default:
      return state;
  }
}
