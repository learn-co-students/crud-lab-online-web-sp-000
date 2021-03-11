import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [], 
    reviews: []
}, action) {

    console.log(action)

    switch(action.type){
        case 'ADD_RESTAURANT':
            // console.log(action)
        const restaurant = {
            id: cuid(), 
            
            text: action.text
            
        }
        console.log(restaurant)
        return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':

            return {...state, restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.id)}

        case 'ADD_REVIEW':
            const review = {
                id: cuid(),  
                text: action.text, 
                restaurantId: action.restaurantId     
            }
        
            return {...state, ...state.restaurants, reviews: [...state.reviews, review]}
        
            case 'DELETE_REVIEW':
        
                 return {...state, ...state.restaurants, reviews: state.reviews.filter(review=> review.id !== action.id)}
        
        default:
            return state
    }
    

}
