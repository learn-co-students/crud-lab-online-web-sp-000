export const addRestaurant = (restaurantText) => {
    return {
        type: 'ADD_RESTAURANT',
        text: restaurantText
    }
}

export const deleteRestaurant = (restaurantId) => {
    return {
        type: 'DELETE_RESTAURANT',
        id: restaurantId
    }
}

export const addReview = (reviewText) => {
    return {
        type: 'ADD_REVIEW',
        text: reviewText
    }
}