
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [] 
}, action)

{
switch(action.type) {
    
    case 'ADD_RESTAURANT':
        
        const restaurantObject = {
            id: cuidFn(),
            text: action.text
        }
    return {
        ...state,
        restaurants:[...state.restaurants, restaurantObject]}
    case 'DELETE_RESTAURANT':
        return {
            ...state,
            restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    case 'ADD_REVIEWS':
         console.log('ID for Review',action)
        const reviewsObject = {
            id: cuidFn(),
            text: action.text,
            restaurantId: action.restaurantId
        }
        return {
            ...state,
            reviews:[...state.reviews, reviewsObject]}
    
   default: return state 
}

}
