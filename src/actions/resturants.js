const addRestaurant = (text) => ({type:"ADD_RESTAURANT", text})

const removeRestaurant = (id) =>  ({type:"REMOVE_RESTAURANT", id})

const addReview = (text, restaurantId) => ({type: "ADD_REVIEW", review: {text, restaurantId}})

const removeReview = (id) =>({type: "REMOVE_REVIEW", id})


export {addRestaurant, removeRestaurant, addReview, removeReview}

