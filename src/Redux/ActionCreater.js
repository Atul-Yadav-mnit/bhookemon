import { DISHES } from '../shared/Dishes'
import { PROMOTIONS } from '../shared/Promotions'
import {LEADERS} from '../shared/Leaders'
import {COMMENTS} from '../shared/Comments'
import * as ActionTypes from './ActionTypes'
import { baseURL } from './baseURL'


export const AddComment = (comment) => {
    return ({
        type: ActionTypes.ADD_Comment,
        payload: comment
    })
}

export const postComment = (dishId, name, rating, comment) => (dispatch) => {
    var newcomment= {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: name
    }
    newcomment.date = new Date().toISOString();
    console.log(newcomment)
    fetch(baseURL+'comments', {
        method: "POST",
        body :JSON.stringify(newcomment),
        headers:{
            "Content-Type" : "application/json"
        },
        credentials: 'same-origin'
    })
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            var error = new Error('Error:'+response.status+" "+response.statusText)
            error.response = response;
            throw error;
        }
    }, (error) => {
        var err = new Error(error.message);
        throw err;
    })
    .then((response) => dispatch(AddComment(response)))
    .catch((err) => {
        console.log("Error in post comment "+err.message);
        alert("Your comment was not submitted "+err.message);
    })

}

// export const FetchDishes = () => (dispatch, getstates) => {  // we can also pass in here getstates
export const FetchDishes = () => (dispatch) => {
    dispatch(loadingDishes())
    fetch(baseURL+'dishes')
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            var error = new Error('Error:'+response.status+" "+response.statusText)
            error.response = response;
            throw error;
        }
    }, (error) => {
        var err = new Error(error.message);
        throw err;
    })
    .then((response) => dispatch(addingDishes(response)))
    .catch((err) => {
        dispatch(dishesFailed(err.message))}
        )
}

export const loadingDishes = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => {

    return({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})
};


export const addingDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})


export const fetchPromotions = () => (dispatch) => {
    dispatch(loading_promotions())
    fetch(baseURL+'promotions')
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            var error = new Error('Error:'+response.status+" "+response.statusText)
            error.response = response;
            throw error;
        }
    }, (error) => {
        var err = new Error(error.message);
        throw err;
    })
    .then((response) => dispatch(adding_promotions(response)))
    .catch((err) => {
        dispatch(failed_promotions(err.message))}
        )
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
    fetch(baseURL+'leaders')
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            var error = new Error('Error:'+response.status+" "+response.statusText)
            error.response = response;
            throw error;
        }
    }, (error) => {
        var err = new Error(error.message);
        throw err;
    })
    .then((response) => dispatch(adding_leaders(response)))
    .catch((err) => {
        dispatch(failed_leaders(err.message))}
        )
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
    fetch(baseURL+'comments')
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            var error = new Error('Error:'+response.status+" "+response.statusText)
            error.response = response;
            throw error;
        }
    }, (error) => {
        var err = new Error(error.message);
        throw err;
    })
    .then((response) => dispatch(adding_comments(response)))
    .catch((err) => {
        dispatch(failed_comments(err.message))}
        )
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
