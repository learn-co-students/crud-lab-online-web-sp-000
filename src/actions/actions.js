import * as types from './types'

export const addRestaurant = (text) => {
    return {type: types.ADD_RESTAURANT, text}
}

export const deleteRestaurant = (id) => {
    return {type: types.DELETE_RESTAURANT, id}
}

export const addReview = review => {
    return {type: types.ADD_REVIEW, review}
}

export const deleteReview = id => {
    return {type: types.DELETE_REVIEW, id}
}