import cuid from 'cuid';

export default function manageReviews(state=[], action) {
  switch (action.type){
    case 'ADD_REVIEW':
      return [...state, {text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId}]
    case 'DELETE_REVIEW':
      return state.filter(review => review.id !== action.id)

    default:
    return state
  }
}