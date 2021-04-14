import { DISHES } from '../shared/Dishes'
import { PROMOTIONS } from '../shared/Promotions'
import {LEADERS} from '../shared/Leaders'
import {COMMENTS} from '../shared/Comments'
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

// export const FetchDishes = () => (dispatch, getstates) => {  // we can also pass in here getstates
export const FetchDishes = () => (dispatch) => {
    dispatch(loadingDishes())
    setTimeout(() => {
        dispatch(addingDishes(DISHES))
    }, 2000);
}

export const loadingDishes = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});


export const addingDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})


export const fetchPromotions = () => (dispatch) => {
    dispatch(loading_promotions())
    setTimeout(() => {
        dispatch(adding_promotions(PROMOTIONS))
    }, 2000);
}

export const loading_promotions = () => ({
    type : ActionTypes.PROMOTIONS_LOADING
})

export const failed_promotions = (errmess) => ({
    type : ActionTypes.PROMOTIONS_FAILED,
    payload : errmess
})

export const adding_promotions = (PROMOTIONS) => ({
    type : ActionTypes.ADD_PROMOTIONS,
    payload : PROMOTIONS
})

export const fetchLeaders = () => (dispatch) => {
    dispatch(loading_leaders())
    setTimeout(() => {
        dispatch(adding_leaders(LEADERS))
    }, 2000);
}

export const loading_leaders = () => ({
    type : ActionTypes.LEADERS_LOADING
})

export const failed_leaders = (errmess) => ({
    type : ActionTypes.LEADERS_FAILED,
    payload : errmess
})

export const adding_leaders = (LEADERS) => ({
    type : ActionTypes.ADD_LEADERS,
    payload : LEADERS
})


export const fetchComments = () => (dispatch) => {
    dispatch(loading_comments())
    setTimeout(() => {
        dispatch(adding_comments(COMMENTS))
    }, 2500);
}

export const loading_comments = () => ({
    type : ActionTypes.COMMENTS_LOADING
})

export const failed_comments = (errmess) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmess
})

export const adding_comments = (COMMENTS) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : COMMENTS
})
