export function addReview({ text, restaurantId }) {
    return {
        type: "ADD_REVIEW",
        review: { text, restaurantId }
    }
}