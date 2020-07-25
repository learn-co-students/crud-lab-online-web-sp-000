
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], reviews: [] 
}, action) {

    switch(action.type){
        
        case 'ADD_RESTAURANT':

            const restaurant = {
                id: cuidFn(),
                text: action.text
            }
    
        return { ...state, restaurants: [...state.restaurants, restaurant] }
    
        case 'DELETE_RESTAURANT':
        return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restaurant.id)}


        case 'ADD_REVIEW':
            let review = {
                id: cuidFn(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
           
            }
        //    if(action.review){ 
        //         review = {
        //             id: cuidFn(),
        //             text: action.review.text,
        //             restaurantId: action.review.restaurantId
        //         }
        //     }
        //     else {
        //         review = {
        //             id: cuidFn(),
        //             text: action.text,
        //             restaurantId: action.restaurantId
        //         }
        //     }
            return {...state, reviews: [...state.reviews, review]}

        default: 
        return state 
    }


}
