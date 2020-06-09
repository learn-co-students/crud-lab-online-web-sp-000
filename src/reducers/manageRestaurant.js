import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  console.log('inside the reducer')
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuidFn(),
        text: action.text.text
      }
      console.log(restaurant)
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews };

    case 'DELETE_RESTAURANT':
      console.log(action);
      return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews };

    case 'ADD_REVIEW':
      console.log(action)
      const review = {
          id: cuidFn(),
          restaurantId: action.review.restaurantId,
          text: action.review.text.text
        }
      return { restaurants: state.restaurants, reviews: state.reviews.concat(review) }

    case 'DELETE_REVIEW':
      console.log(action)
      return { restaurants: state.restaurants, reviews: state.reviews.filter(review => review.id !== action.id) };

  default:
    return state;
  }
}
