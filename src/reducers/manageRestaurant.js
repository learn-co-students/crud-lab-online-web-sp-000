import cuid from 'cuid';

export default function manageRestaurants(state =     {
    restaurants: [],
    reviews: []
  }, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                text: action.restaurant.text, 
                id: cuid(),
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case "DELETE_RESTAURANT":
            return {reviews: state.reviews.filter( review => ( review.resturantId !== action.id )), restaurants: state.restaurants.filter( restaurant => (restaurant.id !== action.id ))}
        case "ADD_REVIEW":
            const review = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuid()
            }
            return {...state, reviews: [...state.reviews, review]}
        case "DELETE_REVIEW":
            debugger
            return {...state, reviews: state.reviews.filter( review => (review.id !== action.id ))}
        default:
            return state;
    }

}
