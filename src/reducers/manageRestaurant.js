import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [], 
    reviews: []
}, action) {

    // console.log(action)

    switch(action.type){
        case 'ADD_RESTAURANT':
        const restaurant = {
            id: cuid(), 
            
            text: action.text
            
        }
        console.log(restaurant)
        return {...state, restaurants: [...state.restaurants, restaurant], reviews: [...state.reviews]}

        case 'DELETE_RESTAURANT':

            return {...state, restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.id), reviews: [...state.reviews]}

        case 'ADD_REVIEW':
            const review = {
                id: cuid(),  
                text: action.review.text, 
                restaurantId: action.review.restaurantId     
            }
        
            return {...state, restaurants: [...state.restaurants], reviews: [...state.reviews, review]}
        
            case 'DELETE_REVIEW':
        
                 return {...state, restaurants: [...state.restaurants], reviews: state.reviews.filter(review=> review.id !== action.id)}
        
        default:
            return state
    }
    

}
