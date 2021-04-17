import { createStore , combineReducers, applyMiddleware } from 'redux'
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createForms } from 'react-redux-form'
import { InitialFeedback } from './Feedback';



export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            leaders: Leaders,
            promotions : Promotions,
            comments : Comments,
            ...createForms({
                feedback : InitialFeedback
            })
        }), 
        applyMiddleware(thunk, logger)
        )

    return store;
}