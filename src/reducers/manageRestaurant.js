import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { id: cuid(), text: action.text }
      //console.log("restaurant",restaurant)
      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants };      

    case 'ADD_REVIEW':
      const review = { id: cuid(), restaurantId: action.review.restaurantId, text: action.review.text }
      console.log("review",review)
      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      // const reviews = state.reviews
      return {...state, reviews }  

    default:
      return state;
  }
};

