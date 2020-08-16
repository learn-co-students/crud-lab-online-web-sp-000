export default function manageReviews(state = {
    reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_REVIEW':

            return {...state, reviews: [...state.reviews, {
                id: cuid(),
                restaurantId: restaurant.id,
                text: action.text
            }]}

        case 'DELETE_REVIEW':

            return {...state, reviews: [...state.reviews.filter(r => r.id !== action.id)]}

        default:
            return state
    }

}
