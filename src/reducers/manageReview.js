import cuid from 'cuid';
export const cuidF = cuid;

function manageReviews(state=[], action) {
	switch(action.type) {

		case 'ADD_REVIEW':
			const review = {text: action.review.text, restaurantId: action.review.restaurantId, id: cuidF()}
			return [...state, review ];

		case 'DELETE_REVIEW':
			return [...state.filter( r => r.id !== action.id)];

		default:
			return state;
	}
}

export default manageReviews;