import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            let newReview = {
                id: cuid(),
                text: action.text,
                restaurantId: action.restaurantId
            }

            return [
                ...state, newReview
            ]
        
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.id)
        
        case "DELETE_RESTAURANT":
            return state.filter(review => review.restaurantId !== action.id)
            
        default:
            return state;
    }
    // switch (action.type) {
    //     case "ADD_RESTAURANT":
    //         let newRestaurant = {
    //             id: cuid(),
    //             name: action.name
    //         }
    //         return {
    //             ...state, restaurants: [...state.restaurants, newRestaurant]
    //         }
        
    //     case 'DELETE_RESTAURANT':
    //         let list = state.restaurants.filter(restaurant => restaurant.id !== action.id)
    //         return {
    //             ...state, restaurants: list
    //         }
    // }
}
