
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [] 
}, action)

{
switch(action.type) {
    
    case 'ADD_RESTAURANT':
        console.log(action)
        const restaurantObject = {
            id: cuidFn(),
            text: action.text
        }
    return {
        ...state,
        restaurants:[...state.restaurants, restaurantObject]}
    case 'DELETE_RESTAURANT':
        return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

   default: return state 
}

}
