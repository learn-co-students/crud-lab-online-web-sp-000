import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  console.log("reducer")
  switch (action.type) {

    case "ADD_RESTAURANT":
      console.log("trigger_addRestaurant")
      const restaurant = {
        id: cuidFn(),
        text: action.text
      }
      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case "DELETE_RESTAURANT":
      console.log("trigger_deleteRestaurant")
      return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id )}

    case 'ADD_REVIEW':
      console.log("trigger_addReview")
      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      console.log("trigger_deleteReview")
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state;
  }
}
