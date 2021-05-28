export const addReview = (review) => {
    return{
        type: "ADD_REVIEW",
        text: review.text,
        restaurantId: review.restaurantId,
    }
}

export const removeReview = (reviewId) => {
    return{
        type: "REMOVE_REVIEW",
        reviewId: reviewId,
    }
}