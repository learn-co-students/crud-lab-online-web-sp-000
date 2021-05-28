


export const addRestaurant = (restaurant) => {
    return{
        type: "ADD_RESTAURANT",
        restaurant: restaurant,
        text: restaurant.text,
    }
}

export const deleteRestaurant = (restaurantId) => {
    return{
        type: "DELETE_RESTAURANT",
        restaurantId: restaurantId,
    }
}