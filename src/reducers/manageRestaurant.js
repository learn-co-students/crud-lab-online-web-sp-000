import cuid from 'cuid';
export const cuidF = cuid;

function manageRestaurants(state=[], action) {
	switch(action.type) {

		case 'ADD_RESTAURANT':
			return [...state, {text: action.text, id: cuidF()}];

		case 'DELETE_RESTAURANT':
			console.log(action)
			console.log(state)
			return [...state.filter( r => r.id !== action.id)];

		default:
			return state;
	}
}

export default manageRestaurants;