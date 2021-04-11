import { createStore } from 'redux'
import {Reducer, initialstate}  from './reducer'

export const configureStore = () => {
    const store = createStore(
        Reducer , initialstate
        )

    return store;
}