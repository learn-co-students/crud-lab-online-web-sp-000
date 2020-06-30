export const addRestaurant = (restaurant) => {

    return({
        type: 'ADD_RESTAURANT',
        text: Object.assign({}, restaurant)
    })
}