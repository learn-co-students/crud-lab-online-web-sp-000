
import cuid from 'cuid';
import Restaurant from '../components/restaurants/Restaurant';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [],
    reviews:[]
}, action) {
    let restaurant;
    switch(action.type){     
        case "ADD_RESTAURANT":
           restaurant = {
                text: action.restaurant,
                id: cuid()
            }
          return{...state, restaurants: [...state.restaurants,restaurant]}
        
        case "DELETE_RESTAURANT":
            return {...state, restaurants: state.restaurants.filter(r=>r.id !==action.id)}
        
        case "ADD_REVIEW":
            // debugger;
            const review = {
           
                text: action.text,
                restaurantId: action.restaurantId,
                id: cuid()
            }
            return {
                ...state,
                reviews:[...state.reviews, review],
                restaurants: [...state.restaurants]
            }
        
        case "DELETE_REVIEW":
            const reviews = state.reviews.filter(r=>r.id !==action.id)
            return {
                ...state,
                restaurants: [...state.restaurants],
                reviews: reviews
            }

        default: 
        return state
    }

}
