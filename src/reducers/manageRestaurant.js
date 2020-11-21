import cuid from 'cuid';

export default function manageRestaurant(state = {
    restaurants: [],
    reviews: []
  }, action) {
    let idx
    switch (action.type) {
        case "ADD_RESTAURANT":
            const restaurant = { text: action.text, id: cuid() }
            return {
                ...state, 
                restaurants: [ ...state.restaurants, restaurant]
            }
        case "DELETE_RESTAURANT":
            idx = state.restaurants.findIndex(restaurant => restaurant.id  === action.id)
            return {
                reviews: state.reviews.filter(review => review.restaurantId !== action.id),
                restaurants: [...state.restaurants.slice(0, idx), ...state.restaurants.slice(idx + 1)]   
            }         
        case "ADD_REVIEW":
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
            return {
                ...state, 
                reviews: [ ...state.reviews, review]
            }
        case "DELETE_REVIEW":
            idx = state.reviews.findIndex(review => review.id  === action.id)
            return {
                ...state,
                reviews: [...state.reviews.slice(0, idx), ...state.reviews.slice(idx + 1)]   
            }                           
        default:
            return state;
    }
  };
