import cuid from "cuid";

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = { text: action.text, id: cuid() };
      const newRestaurants = { ...state };
      newRestaurants.restaurants = state.restaurants.concat(newRestaurant);
      return newRestaurants;
    case "DELETE_RESTAURANT":
      console.log(state);
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.id
        ),
      };
    case "ADD_REVIEW":
      const newReview = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuid(),
      };
      const newReviews = { ...state };
      newReviews.reviews = state.reviews.concat(newReview);
      return newReviews;
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.id),
      };
    default:
      return state;
  }
}
