import cuid from 'cuid';
///soooooooo i think this reducer is passing stuff down to the containers?  Like how else do they know that restos and reviews are arrays?
export default function manageRestaurant(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':

      const restaurant = { id: cuid(), text: action.text }
      console.log(state.restaurants)
      return {
         ...state,
         restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':

      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);

      return { ...state, restaurants };

    case 'ADD_REVIEW':
      // const review = {id: cuid(), text: action.text, restaurantId: action.restaurandId }
      //
      //
      // return {
      //   ...state,
      //   reviews: [...state.reviews, review]
      // }
      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
      return { ...state,
        reviews: [...state.reviews, review]
      }


    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews}
    default:
      return state;
  }
};
