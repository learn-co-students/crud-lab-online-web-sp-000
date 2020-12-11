import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            let review = {
                id: cuid(),
                text: action.text,
                restaurantId: action.restaurantId
            }
            return [...state, review]
        
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.id)
        
        case "DELETE_RESTAURANT":
            return state.filter(review => review.restaurantId !== action.id)
            
        default:
            return state;
    }
}