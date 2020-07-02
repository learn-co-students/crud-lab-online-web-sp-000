
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
        console.log(' Delete Restaurant',action)
        return {
            ...state,
            restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    
    case 'ADD_REVIEWS':

        console.log('Add',action)
        const reviewsObject = {
            id: cuidFn(),
            text: action.text.text,
            restaurantId: action.text.restaurantId
        }
        return {
            ...state,
            reviews:[...state.reviews, reviewsObject]}
    
            case 'DELETE_REVIEW' :
                console.log(' Delete ID for Review',action)
                return {
                    ...state,
                    reviews: state.reviews.filter(review => review.id !== action.id)
                }


   default: return state 
}

}
