
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      };

      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':
      //console.log("deleteRestaurant");
      //console.log(action);
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)

      }

    case 'ADD_REVIEW':
      
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      };


      return {...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => {
        return review.id !== action.payload.id
      })

      return { ...state, reviews: reviews}

    default:
      return {...state};
  }
}
