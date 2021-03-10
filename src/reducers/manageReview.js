import cuid from 'cuid';

export default function manageReviews(state = {
    reviews: []
}, action) {

    //console.log(action)

    switch(action.type){
        case 'ADD_REVIEW':
        const review = {
            id: cuid(), 
            
            text: action.text
            
        }

        return {...state, reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':

            return {...state, reviews: state.reviews.filter(review=> review.id !== action.id)}
            

        default:
            return state
    }
    

}
