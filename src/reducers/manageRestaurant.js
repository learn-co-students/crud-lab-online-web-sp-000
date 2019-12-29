import cuid from 'cuid';

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      // create restaurant object with unique id and text
      const restaurant = {
        id: cuid(),
        text: action.text.text
      };
      // return new state object of restaurants
      return { ...state, restaurants: [...state.restaurants, restaurant] };
    case 'DELETE_RESTAURANT':
      // filter through array of restaurants and
      // return restaurants that haven't been deleted yet
      const restaurants = state.restaurants.filter(
        (restaurant) => restaurant.id !== action.id
      );
      // return new state object of filtered restaurants
      return { ...state, restaurants: restaurants };
    case 'ADD_REVIEW':
      // create review object with unique id, restaurantId to associate with review, and text
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      };
      // return new state object of reviews
      return { ...state, reviews: [...state.reviews, review] };
    case 'DELETE_REVIEW':
      // filter through array of reviews and
      // return reviews that haven't been deleted yet
      const reviews = state.reviews.filter((review) => review.id !== action.id);
      // return new state object of filtered reviews
      return { ...state, reviews: reviews };
    default:
      return state;
  }
}
