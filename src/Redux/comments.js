import * as ActionTypes from './ActionTypes';
import { COMMENTS } from '../shared/Comments'

export const Comments = (state = COMMENTS , action) => {
    switch(action.type){
        case ActionTypes.ADD_Comment:
            
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
        default:
            return state;
    }
}