import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReviews(state = {reviews: [], restaurants: []}, action) {

    switch (action.type) {    

        case 'ADD_REVIEW':
            const review = { 
                id: cuidFn(),
                restaurantId: action.restaurantId,
                text: action.text
            }
            return { ...state, reviews: [...state.reviews, review]}

        
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }

        default:
            return state;
    }    

}