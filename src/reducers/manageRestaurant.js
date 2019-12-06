
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], reviews: []
  }, action) {

    switch (action.type) {
      case 'ADD_RESTAURANT':
        const newRestaurant = {
          id: cuid(),
          text: action.text
        }
        
        return { restaurants: state.restaurants.concat(newRestaurant), reviews: [...state.reviews] };
  
        case 'DELETE_RESTAURANT':
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews.filter(review => review.restaurantId !== action.id)}
            
        case 'ADD_REVIEW':
            const newReview = {
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {restaurants: [...state.restaurants], reviews: state.reviews.concat(newReview)}
        
            case 'DELETE_REVIEW':
            console.log("inside delete review", action.review)
            return {restaurants: state.restaurants, reviews: state.reviews.filter(review => (review.text !== action.review.text || review.restaurantId !== action.review.restaurantId) )}
            
        default:
        return state;
    }
  };
