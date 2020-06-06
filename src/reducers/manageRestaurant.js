
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT': 
    const restaurant = {id: cuid(), text: action.name, reviews: []}
      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
      // filter state to find restaurant that matches the restaurantId
      // const restaurantOfInterest = state.restaurants.find(restaurant => restaurant.id === action.review.restaurantId)
      // assign a new object and add the new review to its reviews array
      // let changedRestaurant = {...restaurantOfInterest};
      // changedRestaurant.reviews = [...changedRestaurant.reviews, action.review] 
      // return {restaurants: [all unchanged restaurants, updated restaurant with review added to reviews array]}
      // const unchangedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.review.restaurantId)
      // return {...state, restaurants: [unchangedRestaurants, changedRestaurant]}
        const review = {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}
        return { ...state, reviews: [...state.reviews, review] }

      case 'DELETE_REVIEW':
        console.log('in DELETE_REVIEW, action', action)
        
        return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

    default:
      return state;
      
  }
}
