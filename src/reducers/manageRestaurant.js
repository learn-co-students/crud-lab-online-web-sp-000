import cuid from "cuid";
export const cuidFn = cuid;

// MY CODE THAT COMBINES THIS INTO A ROOT REDUCER:

// export default function manageRestaurants(restaurants = [], action) {
//   switch (action.type) {
//     case "ADD_RESTAURANT":
//       const restaurant = { id: cuid(), text: action.text };
//       return [...restaurants.concat(restaurant)];
//     case "DELETE_RESTAURANT":
//       return [
//         ...restaurants.filter((restaurant) => restaurant.id !== action.id),
//       ];

//     default:
//       return restaurants;
//   }
// }

// FLATIRON SOLUTION TO PASS THE TDD (DOESNT USE COMBINE REDUCERS)
export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant],
      };

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(
        (restaurant) => restaurant.id !== action.id
      );
      return { ...state, restaurants };

    case "ADD_REVIEW":
      const review = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuidFn(),
      };
      return { ...state, reviews: [...state.reviews, review] };

    case "DELETE_REVIEW":
      const reviews = state.reviews.filter((review) => review.id !== action.id);
      return { ...state, reviews };

    default:
      return state;
  }
}
