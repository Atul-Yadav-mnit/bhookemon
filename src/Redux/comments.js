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
            return {...state, isLoading: false, comments: state.comments.concat(action.payload)};
        default:
            return state;
    }
}