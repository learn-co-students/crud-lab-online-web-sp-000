import cuid from 'cuid';

export default function manageReview(state = [], action) {

    switch(action.type){
        case "ADD_REVIEW":
            const newReview = {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}

            return [...state, newReview]

        case "REMOVE_REVIEW":
            console.log(state.reviews, action)
            return state.filter(r => (r.id !== action.id))
        default:
            return state
}
}