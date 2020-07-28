export const addRestaurant = restaurant => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant: Object.assign({}, restaurant)}
}

export const removeRestaurant = restaurant => {
  return {
    type: 'REMOVE_RESTAURANT',
    restaurantId: restaurant.id}
}

export const updateRestaurant = restaurant => {
  return {
    type: 'UPDATE_RESTAURANT',
    restaurantId: restaurant.id,
    restaurant: restaurant
  }
}
