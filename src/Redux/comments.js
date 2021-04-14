import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    isLoading: true,
    errmsg :null,
    comments:[]
    } , action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errmsg:null, comments: action.payload};
        case ActionTypes.COMMENTS_LOADING:
            return {...state, isLoading: true, errmsg: null, comments:[]}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errmsg: action.payload};
        case ActionTypes.ADD_Comment:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return {...state, isLoading: false, comments: state.comments.concat(comment)};
        default:
            return state;
    }
}