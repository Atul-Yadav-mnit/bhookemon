import { createStore , combineReducers } from 'redux'
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            leaders: Leaders,
            promotions : Promotions,
            comments : Comments
        })
        )

    return store;
}