
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants:[], reviews:[] }, action) {
    
    switch(action.type){

        case "ADD_RESTAURANT": 
      
            console.log(`adding ${action.text} to the Redux store`)
            const restaurant = {
                text: action.text,
                id: cuid(),
            }
            return { ...state, restaurants: [...state.restaurants, restaurant] }

        case "DELETE_RESTAURANT":

            console.log(`removing restaurant with id ${action.id}`)
            return {...state, restaurants: state.restaurants.filter( x => x.id !== action.id)}

        case "ADD_REVIEW":
            
            const review = {
                ...action.review,
                id: cuid()
            }
            console.log(`adding review ${review.text}`)        
            return  {...state, reviews:[...state.reviews, review]}

        case "DELETE_REVIEW":

        console.log(`deleteing review with id#${action.reviewId}`)
        return {...state, reviews: state.reviews.filter(review => review.id !== action.reviewId)}
        
        default:
            return state
    }

}
