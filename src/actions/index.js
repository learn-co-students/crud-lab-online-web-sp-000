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

export const addReview = (arg) => {
  return {
    type: 'ADD_REVIEW',
    review: {
      text: arg.text,
      restaurantId: arg.restaurantId
    }    
  }
}

export const deleteReview = (reviewId) => {
  return {
    type: 'DELETE_REVIEW',
    id: reviewId
  }
}