import cuid from "cuid";

export default function manageRestaurants(restaurants = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { id: cuid(), text: action.text };
      return [...restaurants.concat(restaurant)];
    case "DELETE_RESTAURANT":
      return [
        ...restaurants.filter((restaurant) => restaurant.id !== action.id),
      ];

    default:
      return restaurants;
  }
}
