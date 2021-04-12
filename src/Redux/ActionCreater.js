import * as ActionTypes from './ActionTypes'

export const AddComment = (dishId, name, rating, comment) => {
    return ({
        type: ActionTypes.ADD_Comment,
        payload: {
            dishId: dishId,
            rating: rating,
            comment: comment,
            author: name
        }
    })
}