export default function manageReviews(state = [], action) {
    switch (action.type) {
        case 'ADD_REVIEW':
            return state.concat(action.review);
        case 'DELETE_REVIEW':
            return state.filter(r => {return r.id !== action.id});
        default:
            return state;
    }
}