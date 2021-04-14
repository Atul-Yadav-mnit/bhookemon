import * as ActionTypes from './ActionTypes'

export const Promotions = (state = {
    isLoading: true,
    errmsg: null,
    promotions: []
    }, action) => {
        switch (action.type) {
            case ActionTypes.ADD_PROMOTIONS:
                return {...state, isLoading: false, errmsg: null, promotions: action.payload};
            case ActionTypes.PROMOTIONS_LOADING:
                return {...state, isLoading: true, errmsg: null, promotions: []}
            case ActionTypes.PROMOTIONS_FAILED:
                return {...state, isLoading: false, errmsg: action.payload};
            default:
                return state;
        }
}