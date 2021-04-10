import cuid from 'cuid'

export default function manageRestaurants(state={
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':
      const restos = state.restaurants.filter(resto => resto.id !== action.id)
      return { ...state, restaurants: restos }

    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      const revs = state.reviews.filter(rev => rev.id !== action.id)
      return { ...state, reviews: revs }

    default:
      return state
  }
}
