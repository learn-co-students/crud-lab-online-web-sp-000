import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {

        case 'ADD_RESTAURANT':
            const restaurant = { text: action.text, id: cuidFn() };
            return {
                ...state, restaurants: [...state.restaurants, restaurant]
            }

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return { ...state, restaurants }

        case 'ADD_REVIEW':
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
            return {
                ...state, reviews: [...state.reviews, review]
            }

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return { ...state, reviews }

        default:
            return state;

    }
};

// // 1) Restaurant Component with Redux
// has a button that dispatches a DELETE_RESTAURANT action with the proper id when clicked:

// AssertionError: expected 1 to equal 0
// + expected - actual

// -1
// +0

// at Context.<anonymous> (test/restaurants-test.js:127:52)
// at processImmediate (node:internal/timers:464:21)

// 2) Restaurant Component with Redux
//  updates the state of the store to remove the component:

// AssertionError: expected 2 to equal 1
// + expected - actual

// -2
// +1

// at Context.<anonymous> (test/restaurants-test.js:153:52)
// at processImmediate (node:internal/timers:464:21)